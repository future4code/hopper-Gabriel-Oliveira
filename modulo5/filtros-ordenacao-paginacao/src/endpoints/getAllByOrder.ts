import { Request, Response } from 'express'
import connection from '../database/connection'



export const getAllByOrder = async(req: Request,res: Response): Promise<void> =>{
    try {
        let statusCode = 400
        let order = req.query.order as string 

        const result = await connection('Filtros_Ordenacao_Paginacao')
        .select('id', 'name', 'email', 'type')
        .orderBy(`${order}`, "ASC")

        if(!order && order.toLowerCase() !== "email" && order.toLowerCase() !== "type"){
            order = "email"
        }



       if(!result.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(result)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }