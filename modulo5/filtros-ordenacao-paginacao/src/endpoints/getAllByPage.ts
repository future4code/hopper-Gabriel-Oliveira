import { Request, Response } from 'express'
import connection from '../database/connection'
  
  
  
  export const getAllByPage = async(req: Request,res: Response,): Promise<void> =>{
      try {
        let statusCode = 500

        let size = 5 
        let page = Number(req.query.page)
        let offset = size * (page - 1)

        const result = await connection('Filtros_Ordenacao_Paginacao')
        .select("id", "name", "email", "type")
        .limit(size)
        .offset(offset)


        if(page < 1){
            statusCode = 404
            throw new Error("A página deve ser maior que 0.");
            
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