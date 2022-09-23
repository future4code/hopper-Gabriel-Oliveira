import { Request, Response } from "express";
import connection from "../database/connection";
import { Purchases } from "../types/types";



export const RegisterPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        let statusCode = 400
        const { user_id, product_id, quantity } = req.body;

        const checkUser = await connection.raw(`
        SELECT * FROM labecommerce_users
        WHERE id = "${user_id}"
        `)


        if (!user_id|| !product_id || !quantity) {
            statusCode = 422
            throw new Error("Parâmetro 'user_id', 'product_id' ou 'quantity' não informado.");
        }

        if(typeof user_id && typeof product_id !== "string"){
            statusCode = 422
            throw new Error("Parâmetro 'user_id' e 'product_id' precisam ser do tipo string.");
        }

        if(typeof quantity != "number"){
            statusCode = 422
            throw new Error("Parâmetro 'quantity' precisa ser do tipo number.");
        }
        if(checkUser[0].length < 0){
            statusCode = 422
            throw new Error("Comprador não encontrado no banco de dados."); 
        }


        const price = await connection.raw(`
        SELECT price FROM labecommerce_products
        WHERE id = "${product_id}";
        `)

        const total_price = price[0][0].price * quantity



        const newBuy: Purchases = {
            id: String(Date.now()),
            user_id,
            product_id,
            quantity,
            total_price
        }

        await connection.raw(`
          INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
          VALUES ("${newBuy.id}", "${newBuy.user_id}", "${newBuy.product_id}", "${newBuy.quantity}" , "${newBuy.total_price}")
          `)


          res.status(200).send("Compra efetuada com sucesso!")



    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}