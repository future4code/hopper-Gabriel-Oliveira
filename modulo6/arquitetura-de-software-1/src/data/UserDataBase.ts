import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";




export class UserDataBase extends BaseDatabase {

    //CREATE USER
    public async createUser(
        id: string,
        name: string,
        email: string,
        password: string
    ): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    name,
                    email,
                    password
                })
                .into('User_Arq');
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    //GET ALL USERS
    public async get(): Promise<User[]> {

        try {

            const users: User[] = [];

            const result = await BaseDatabase.connection()
                .select("*")
                .from('User_Arq');

            for (let user of result) {
                users.push(user);
            }

            return users;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    //DELETE USER
    public async deleteUser(
        id: string
    ): Promise<void> {
        try {
            await UserDataBase.connection()
                .delete('*')
                .from('User_Arq')
                .where("id" === id)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}