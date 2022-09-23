import { Request, Response } from 'express'
import { User } from '../types/types'
import connection from '../database/connection'



export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        let statusCode = 400
        const { name, email, password } = req.body;


        const checkEmail = await connection.raw(`
        SELECT * FROM labecommerce_users
        WHERE email = "${email}"
        `)


        if (!name || !email || !password) {
            statusCode = 422
            throw new Error("Parâmetro 'name', 'email' ou 'password' não informado.");
        }

        if (typeof name || typeof password || typeof email !== 'string') {
            statusCode = 422
            throw new Error("Os parâmetros name, email e password precisam ser do tipo string.");
        }

        if (checkEmail[0].length > 0) {
            statusCode = 422
            throw new Error("Email já cadastrado.");
        }

        const regExp = /^(\w+)@[a-z]+(.[a-z]+){1,2}$/i

        if (regExp.test(email) !== true) {
            statusCode = 422
            throw new Error("Deve ser passado um email valido.");
        }


        const newUser: User = {
            id: String(Date.now()),
            name,
            email,
            password
        }

        await connection.raw(`
          INSERT INTO labecommerce_users(id, name, email, password)
          VALUES ("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}")
          `)


          res.status(200).send("Usuário criado com sucesso")





    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}