// export type User = {
//     id: string,
//     email: string,
//     password: string
// }


export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string  
    ){
        this.id = id,
        this.email = email,
        this.password = password
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }
}