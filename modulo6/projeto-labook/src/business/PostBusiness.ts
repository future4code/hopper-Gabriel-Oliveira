import { PostsDataBase } from "../data/PostsDataBase";
import { createPostDTO } from "../models/PostsDTO";
import { generateId } from "../services/GenerateId";


export class PostBusiness {
    async create(input: createPostDTO): Promise<void>{
        const {photo, description, type, author_id} = input
        if(!photo || !description || !type || !author_id){
            throw new Error("Dados Inválidos.");  
        }

        const id = generateId();

        const postsDataBase = new PostsDataBase();
        await postsDataBase.create({
            id,
            photo,
            description,
            type,
            author_id
        })
    }


    public async get(id: string) {
        const postDatabase = new PostsDataBase();
        const result = await postDatabase.get(id);

        return result
    }
}