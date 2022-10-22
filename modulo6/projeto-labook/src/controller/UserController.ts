import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { createUserDTO } from "../models/UsersDTO";

export class UserController{
    async create(req: Request, res: Response):Promise<void>{
        try {
            const {name, email, password} = req.body
            const input: createUserDTO = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness();
            await userBusiness.create(input)
        res.status(201).send({message: "User created successfully."})   
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}