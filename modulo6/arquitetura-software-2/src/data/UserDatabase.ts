import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_USERS = "LABEFLIX_USER";

  //CREATE USER
  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_USERS);
  }

  // GET ALL USERS

  public async get(): Promise<User[]> {

    try {

        const users: User[] = [];

        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDatabase.TABLE_USERS);

        for (let user of result) {
            users.push(user);
        }

        return users;

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    }
}



}
