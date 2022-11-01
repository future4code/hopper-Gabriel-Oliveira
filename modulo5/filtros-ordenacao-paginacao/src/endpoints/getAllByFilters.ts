import { Request, Response } from 'express'
import connection from '../database/connection'


export const getAllByFilters = async(req: Request,res: Response): Promise<void> =>{
    try {
        let statusCode = 400

        let name = req.query.name as string;
        let type = req.query.type as string;
        let order = req.query.order as string;
        let filter = req.query.filter as string 
        let size = 5 
        let page = Number(req.query.page)
        let offset = size * (page - 1)


        if(!name){
            name = "%"
        }

        if(!type){
            type = "%"
        }

        if(!order){
            order = "name"
        }

        if(!filter){
            filter = "ASC"
        }

        if(!page){
            offset = 1
        }

        const result = await connection('Filtros_Ordenacao_Paginacao')
        .where("name", "like", `%${name}%`)
        .andWhere("type", "like", `%${type}%`)
        .orderBy(filter, order)
        .limit(size)
        .offset(offset)





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

