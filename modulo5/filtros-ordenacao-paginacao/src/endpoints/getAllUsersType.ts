import { Request, Response } from 'express'
import connection from '../database/connection'

export const getAllUsersType = async(req: Request,res: Response): Promise<void> =>{
    try {
        let statusCode = 400
        let type = req.params.type

        const result = await connection('Filtros_Ordenacao_Paginacao')
        .select('id', 'name', 'email', 'type')
        .where({type})

        if(type.toUpperCase() !== "TEACHER" && type.toUpperCase() !== "OPERATIONS" && type.toUpperCase() !== "CX"){
            type = '%'
        }

        if(!result.length){
            res.statusCode = 404
            throw new Error("No recipes found")
          }

 
       res.status(200).send(result);
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }