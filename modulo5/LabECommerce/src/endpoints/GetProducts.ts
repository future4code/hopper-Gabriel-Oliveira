import { Request, Response } from "express";
import connection from "../database/connection";




export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        let statusCode = 400

        let search = String(req.query.search);
        let order = String(req.query.order);
        let sort = "name";

        if(!search){
            search = "%"
        }

        if(!order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
            order = "asc"
        }


        const result = await connection.raw(`
        SELECT * FROM labecommerce_products
        WHERE name LIKE "%${search}%"
        ORDER BY ${sort} ${order}
        `)

          res.status(200).send(result[0])

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}