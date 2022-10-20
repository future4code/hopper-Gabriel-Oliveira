import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";
import { User } from "../models/User";
import { createUserDTO } from "../models/UserDTO";
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { ShortPassword } from "../error/ShortPassword";
import { InvalidRequest } from "../error/InvalidRequest";

export class UserBusiness {
  // CREATE USER
  async create(input: createUserDTO): Promise<void> {
    try {
      const { name, email, password } = input;
      if (!email || !name || !password) {
        throw new InvalidRequest();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new ShortPassword();
      }

      const id = generateId();

      const userDatabase = new UserDatabase();
      await userDatabase.create({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage );
      
    }
  }

  //GET USERS
  async get(): Promise<User[]> {
    const userDataBase = new UserDatabase();
    return await userDataBase.get();
  }
}
