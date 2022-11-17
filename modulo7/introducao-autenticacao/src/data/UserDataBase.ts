import { CustomError } from "../error/CustomError";
import { EditUserDTO, InputLoginDTO, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

const TABLE_USERS = "Users_Authentication";

export class UserDataBase extends BaseDatabase {
  public signUp = async (user: User) => {
    try {
      await UserDataBase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into(TABLE_USERS);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (email: string) => {
    try {
      const result = await UserDataBase.connection(TABLE_USERS)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserDTO) => {
    try {
      const result = await UserDataBase.connection(TABLE_USERS)
        .update({ email: user.email, password: user.password })
        .where({ id: user.id });
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async (id: string) => {
    try {
      const result = await UserDataBase.connection(TABLE_USERS)
        .select("id", "email")
        .where({ id });

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
