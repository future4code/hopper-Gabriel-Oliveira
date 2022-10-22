import { BaseDataBase } from "./BaseDataBase";


export class PostsDataBase extends BaseDataBase{
    private static TABLE_POSTS = 'labook_posts'
    async create({id, photo, description, type, createdAt, authorId }: any): Promise<void>{
        await PostsDataBase.connection
        .insert({
           id,
           photo,
           description,
           type,
           createdAt,
           authorId 
        })
        .into(PostsDataBase.TABLE_POSTS)
    }
}