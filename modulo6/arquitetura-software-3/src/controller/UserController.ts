import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { createUserDTO } from "../models/UserDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input: createUserDTO = {
        email,
        name,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }


  //GET USERS
  async get(req: Request, res: Response): Promise<void> {
    try {

        const userBusiness = new UserBusiness
        const users = await userBusiness.get();

        res.send(users).status(200);

    } catch (error: any) {
        res.send({ message: error.message }).status(error.status);
    }
}
}
