import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostDTO } from "../models/PostsDTO";


export class PostController{
    async create(req: Request, res: Response):Promise<void>{
        try {
            const {photo, description, type, authorId} = req.body
            const input: createPostDTO = {
                photo,
                description,
                type,
                authorId
            }

            const postBusiness = new PostBusiness();
            await postBusiness.create(input);
        res.status(201).send({message: "Post created successfully."})   
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}