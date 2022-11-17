import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostDTO } from "../models/PostsDTO";


export class PostController{
    async create(req: Request, res: Response):Promise<void>{
        try {
            const {photo, description, type, author_id} = req.body
            const input: createPostDTO = {
                photo,
                description,
                type,
                author_id
            }

            const postBusiness = new PostBusiness();
            await postBusiness.create(input);
        res.status(201).send({message: "Post created successfully."})   
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    async get(req: Request, res: Response): Promise<void>{
        try{
            const {id} = req.params

            const postBusiness = new PostBusiness();
            const result = await postBusiness.get(id);
        
        res.status(201).send(result)
        }catch (error:any) {
            res.status(400).send(error.message);
        }
    }



}