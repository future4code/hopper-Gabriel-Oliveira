import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";


export class UserController {
    async createUser(req: Request, res: Response): Promise<void> {

        try {
            const { name, email, password } = req.body

            const input = {
                name: name,
                email: email,
                password: password
            }

            const userBusiness = new UserBusiness();
            await userBusiness.createUser(input);

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    //GET ALL USERS
    async get(req: Request, res: Response): Promise<void> {
        try {

            const userBusiness = new UserBusiness
            const users = await userBusiness.get();

            res.send(users).status(200);

        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    //DELETE USER
    async deleteUser(req: Request, res: Response): Promise<void> {

        try {
            const input = {
                id: req.params.id
            }
            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser(input);

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}