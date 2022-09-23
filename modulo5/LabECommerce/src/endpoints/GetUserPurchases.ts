import { Request, Response } from "express";
import connection from "../database/connection";




export const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        let statusCode = 400

        const user_id = req.params.user_id

        const search = await connection.raw(`
        SELECT * FROM labecommerce_users 
        JOIN labecommerce_purchases ON labecommerce_purchases.user_id = labecommerce_users.id
        WHERE labecommerce_users.id = "${user_id}";
        `)


        
    if (search[0].length < 1)  {
        throw new Error ("Usuário não encontrado.")
      }


          res.status(200).send(search[0])

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}