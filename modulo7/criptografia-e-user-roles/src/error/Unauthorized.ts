import { CustomError } from "./CustomError";

export class Unauthorized extends CustomError{
    constructor(){
        super(400, "Unauthorized user.")
    }
}