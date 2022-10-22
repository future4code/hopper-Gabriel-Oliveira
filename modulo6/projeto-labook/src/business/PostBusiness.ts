import { PostsDataBase } from "../data/PostsDataBase";
import { createPostDTO } from "../models/PostsDTO";
import { generateId } from "../services/GenerateId";


export class PostBusiness {
    async create(input: createPostDTO): Promise<void>{
        const {photo, description, type, authorId} = input
        if(!photo || !description || !type || authorId){
            throw new Error("Dados Inválidos.");  
        }

        const id = generateId();

        const postsDataBase = new PostsDataBase();
        await postsDataBase.create({
            id,
            photo,
            description,
            type,
            authorId
        })
    }
}