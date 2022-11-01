export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string
    ){
      this.id = id
      this.name = name
      this.email = email
      this.password = password
    }
}