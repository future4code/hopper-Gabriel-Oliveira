import { UserDataBase } from "../data/UserDataBase";
import { createUserDTO } from "../models/UsersDTO";
import { generateId } from "../services/GenerateId";
import { emailRgx } from "../services/ValidateEmail";

export class UserBusiness {
  async create(input: createUserDTO): Promise<void> {
    const { name, email, password } = input;

    const id = generateId();
    
   
    
    if (!name || !email || !password) {
      throw new Error("Dados Inválidos.");
    }

    if (password.length < 6) {
      throw new Error("A senha precisa ter no mínimo 6 caracteres.");
    }

    if (!emailRgx.test(email)) {
      throw new Error("Email inválido.");
    }

    const userDatabase = new UserDataBase();
    await userDatabase.create({
        id,
        name,
        email,
        password
    });
  };
};
