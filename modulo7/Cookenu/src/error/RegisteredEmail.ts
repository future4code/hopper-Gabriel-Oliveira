import { CustomError } from "./CustomError";

export class RegisteredEmail extends CustomError{
    constructor(){
        super(200, "E-mail already registered.")
    }
}