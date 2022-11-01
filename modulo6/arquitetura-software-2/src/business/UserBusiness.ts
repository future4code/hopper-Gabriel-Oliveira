import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";
import { User } from "../models/User";

export class UserBusiness {
  // CREATE USER
  async create({ email, name, password }: any): Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)");
    }

    const id = generateId();

    const userDatabase = new UserDatabase();
    await userDatabase.create({
      id,
      name,
      email,
      password,
    });
  }

  //GET USERS
  async get(): Promise<User[]> {
    const userDataBase = new UserDatabase();
    return await userDataBase.get();
  }
}
