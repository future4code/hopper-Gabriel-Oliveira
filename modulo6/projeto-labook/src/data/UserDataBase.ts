import { BaseDataBase } from "./BaseDataBase";
import { User } from "../models/User";

export class UserDataBase extends BaseDataBase{
    private static TABLE_USERS = 'labook_users';
    async create({id, name, email, password}: any): Promise<void>{
        await UserDataBase.connection.insert({
            id, 
            name, 
            email,
            password
        })
        .into(UserDataBase.TABLE_USERS)
    }

    public findByEmail = async (email: string) => {
        const usersDB = await BaseDataBase
            .connection(UserDataBase.TABLE_USERS)
            .select()
            .where({email})

        return usersDB
    }

    
}