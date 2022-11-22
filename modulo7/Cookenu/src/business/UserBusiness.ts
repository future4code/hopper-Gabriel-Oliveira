import { BaseDatabase } from "../data/BaseDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "../error/CustomError";
import { UserNotFound } from "../error/EmailNotFound";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidRole } from "../error/InvalidRole";
import { InvalidPassword } from "../error/InvalidPassword";
import { InvalidRequest } from "../error/InvalidRequest";
import { RegisteredEmail } from "../error/RegisteredEmail";
import { ShortPassword } from "../error/ShortPassword";
import { Unathorized } from "../error/Unauthorized";
import {
  User,
  UserInputDTO,
  USER_ROLE,
  InputLoginDTO,
  InputSearchProfile,
} from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";
import { ValidateEmail } from "../services/ValidateEmail";

const hashManager = new HashManager();
const userDataBase = new UserDataBase();
const authenticator = new Authenticator();

export class UserBusiness {
  public signUp = async (input: UserInputDTO) => {
    try {
      const { name, email, password, role } = input;

      if (!name || !email || !password || !role) {
        throw new InvalidRequest();
      }
      if (password.length < 6) {
        throw new ShortPassword();
      }
      if (!ValidateEmail.test(email)) {
        throw new InvalidEmail();
      }
      if (role !== USER_ROLE.ADMIN && role !== USER_ROLE.NORMAL) {
        throw new InvalidRole();
      }

      const verifyEmail = await userDataBase.findUserByEmail(email);
      if (verifyEmail) {
        throw new RegisteredEmail();
      }

      const id: string = generateId();
      const hashPassword: string = await hashManager.hash(password);

      const user: User = {
        id,
        name,
        email,
        password: hashPassword,
        role,
      };

      await userDataBase.signUp(user);

      const token = await authenticator.generateToken({ id, role });
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
      const user = await userDataBase.login(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = authenticator.generateToken({
        id: user.id,
        role: user.role,
      });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (token: string) => {
    try {
      if (!token) {
        throw new InvalidRequest();
      }

      const { id } = await authenticator.getTokenData(token);

      const result = await userDataBase.getUserByToken(id);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfileById = async (input: InputSearchProfile) => {
    try {
      const { token, id } = input;
      if (!token || !id) {
        throw new InvalidRequest();
      }

      const tokenData = authenticator.getTokenData(token);
      const verifyUser = await userDataBase.getUserByToken(
        (
          await tokenData
        ).id
      );
      const user = await userDataBase.getUserByToken(id);

      if (!verifyUser) {
        throw new InvalidRequest();
      }

      if (!user) {
        throw new UserNotFound();
      }

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
