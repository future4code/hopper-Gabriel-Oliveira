import { Request, Response } from 'express'
import connection from '../database/connection'


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let statusCode = 400
        let searchName = req.query.searchName as string

        const resultSearch = await connection.raw(`
        SELECT id, name, email, type
        FROM Filtros_Ordenacao_Paginacao
        WHERE name LIKE "%${searchName}%";
        `)

        if(!searchName){
            searchName = '%'

        }
 
       if(!resultSearch[0].length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(resultSearch[0])
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


