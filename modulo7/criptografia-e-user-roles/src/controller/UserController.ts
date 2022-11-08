import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../data/UserDataBase";
import {
  InputEditUserDTO,
  InputLoginDTO,
  InputSignUpDTO,
} from "../models/User";
import { GetTokenData } from "../services/GetTokenData";

export class UserController {
  public signUp = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: InputSignUpDTO = {
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.signUp(input);

      res.status(201).send({ message: "User created successfully!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: InputLoginDTO = {
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.login(input);

      res.status(201).send({ message: "Login successfully!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: InputEditUserDTO = {
        email: req.body.email,
        password: req.body.password,
        token: req.headers.authorization as string,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.editUser(input);
      res.status(201).send({ message: "User successfully changed." });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const userBusiness = new UserBusiness();
      const result = await userBusiness.getUserById(token);

      res.status(201).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
