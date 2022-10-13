import { UserDataBase } from "../data/UserDataBase";
import { User } from "../models/User";


export class UserBusiness {

    //CREATE USER
    public createUser = async (user: any) => {
        try {
            const { name, email, password } = user

            if (!name || !email || !password) {
                throw new Error("Please fill all the fields");
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }

            if (password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }

            const id: string = Date.now().toString();

            const userDatabase = new UserDataBase()
            await userDatabase.createUser(id, email, name, password);


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    //GET ALL USERS
    async get(): Promise<User[]> {

        const userDataBase = new UserDataBase()
        return await userDataBase.get();
    }


    //DELETE USER

    async deleteUser(input: {id: string}) {
				
        if(!input.id){
            throw new Error("Insira um id!")
        }
        const userDataBase = new UserDataBase()
        return await userDataBase.deleteUser(input.id);
    }
}



