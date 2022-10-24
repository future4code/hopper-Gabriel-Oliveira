import { Posts } from "../models/Posts";
import { BaseDataBase } from "./BaseDataBase";


export class PostsDataBase extends BaseDataBase{
    private static TABLE_POSTS = 'labook_posts'
    async create({id, photo, description, type, created_at, author_id }: any): Promise<void>{
        await PostsDataBase.connection
        .insert({
           id,
           photo,
           description,
           type,
           created_at,
           author_id 
        })
        .into(PostsDataBase.TABLE_POSTS)
    }


    public async get(id: string) {
    
        const result = await PostsDataBase.connection(PostsDataBase.TABLE_POSTS)
        .select()
        .where({id});

        const post = {
            id: result[0].id,
            photo: result[0].photo,
            description: result[0].description,
            type: result[0].type,
            created_at: result[0].created_at,
            author_id: result[0].author_id
        }

        return post
 
    }

}