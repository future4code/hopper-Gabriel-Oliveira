import { CustomError } from "./CustomError";

export class InvalidPassword extends CustomError{
    constructor(){
        super(401, "Ivalid Password.")
    }
}