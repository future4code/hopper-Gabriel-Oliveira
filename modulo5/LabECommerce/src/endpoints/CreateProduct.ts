import { Request, Response } from "express";
import { Products } from "../types/types";
import connection from "../database/connection";




export const createProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        let statusCode = 400
        const { name, price, image_url } = req.body;

        const checkProduct = await connection.raw(`
        SELECT * FROM labecommerce_products
        WHERE name LIKE "%${name}%"
        `)


        if (!name || !price || !image_url) {
            statusCode = 422
            throw new Error("Parâmetro 'name', 'price' ou 'image_url' não informado.");
        }

        if(typeof name && typeof image_url !== "string"){
            statusCode = 422
            throw new Error("Parâmetro 'name' e 'image_url' precisam ser do tipo string.");
        }

        if(typeof price != "number"){
            statusCode = 422
            throw new Error("Parâmetro 'price' precisa ser do tipo number.");
        }

        if (checkProduct[0].length > 0) {
            statusCode = 422
            throw new Error("Produto já cadastrado.");
        }


        const newProduct: Products = {
            id: String(Date.now()),
            name,
            price,
            image_url
        }

        await connection.raw(`
          INSERT INTO labecommerce_products(id, name, price, image_url)
          VALUES ("${newProduct.id}", "${newProduct.name}", "${newProduct.price}", "${newProduct.image_url}")
          `)


          res.status(200).send("Produto cadastrado com sucesso!")



    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}