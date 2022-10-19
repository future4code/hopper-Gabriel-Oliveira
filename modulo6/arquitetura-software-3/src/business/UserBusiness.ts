import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";
import { User } from "../models/User";
import { createUserDTO } from "../models/UserDTO";

export class UserBusiness {
  // CREATE USER
  async create(input: createUserDTO): Promise<void> {
    const {name, email, password} = input 
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)");
    }

    if(!email.includes("@")){
      throw new Error("Email inválido.");
    }

    if(password.length < 6){
      throw new Error("A senha precisa ter no mínimo 6 caracteres.");
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
