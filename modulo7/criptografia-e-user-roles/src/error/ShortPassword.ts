import { CustomError } from "./CustomError";


export class ShortPassword extends CustomError{
    constructor(){
        super(411, "Your password must contain at least 6 characters.")
    }
}