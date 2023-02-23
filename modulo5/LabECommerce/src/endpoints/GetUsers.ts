import { Request, Response } from "express";
import connection from "../database/connection";




export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let statusCode = 400

        const UserAndPurchases = await connection.raw(`
        SELECT * FROM labecommerce_purchases
        JOIN labecommerce_users  ON labecommerce_users.id = labecommerce_purchases.user_id
        `)


          res.status(200).send(UserAndPurchases[0])

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}