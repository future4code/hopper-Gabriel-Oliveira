import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "../error/CustomError";
import { UserNotFound } from "../error/EmailNotFound";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidPassword } from "../error/InvalidPassword";
import { InvalidRequest } from "../error/InvalidRequest";
import { ShortPassword } from "../error/ShortPassword";
import {
  EditUserDTO,
  InputEditUserDTO,
  InputLoginDTO,
  InputSignUpDTO,
  User,
} from "../models/User";
import { GetTokenData } from "../services/GetTokenData";
import { generateId } from "../services/GenerateId";
import { generateToken } from "../services/GenerateToken";
import { ValidateEmail } from "../services/ValidateEmail";
import { HashManager } from "../services/HashManager";

const hashManager = new HashManager();

export class UserBusiness {
  public signUp = async (input: InputSignUpDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new InvalidRequest();
      }
      if (password.length < 6) {
        throw new ShortPassword();
      }
      if (!ValidateEmail.test(email)) {
        throw new InvalidEmail();
      }

      const id: string = generateId();
      const hashPassword: string = await hashManager.hash(password);

      const user: User = {
        id,
        email,
        password: hashPassword,
      };

      const userDataBase = new UserDataBase();
      await userDataBase.signUp(user);

      const token = generateToken({ id });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: InputLoginDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new InvalidRequest();
      }

      if (!ValidateEmail.test(email)) {
        throw new InvalidEmail();
      }

      const userDataBase = new UserDataBase();
      const user = await userDataBase.login(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      );

      if(!isValidPassword){
        throw new InvalidPassword();
        
      }
      const token = generateToken({ id: user.id });
      return token;
    } catch (error: any) {
      throw new CustomError(401, error.message);
    }
  };

  public editUser = async (input: InputEditUserDTO) => {
    try {
      const { email, password, token } = input;

      if (!email || !password || !token) {
        throw new InvalidRequest();
      }
      if (password.length < 6) {
        throw new ShortPassword();
      }
      if (!ValidateEmail.test(email)) {
        throw new InvalidEmail();
      }

      const { id } = GetTokenData(token);
      const hashPassword: string = await hashManager.hash(password);

      const editUser: EditUserDTO = {
        id,
        email,
        password: hashPassword,
      };

      const userDataBase = new UserDataBase();
      await userDataBase.editUser(editUser);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async (token: string) => {
    try {
      if (!token) {
        throw new InvalidRequest();
      }
      const { id } = GetTokenData(token);

      const userDataBase = new UserDataBase();
      const result = await userDataBase.getUserById(id);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
