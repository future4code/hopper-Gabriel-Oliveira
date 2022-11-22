import { CustomError } from "./CustomError";

export class InvalidRole extends CustomError{
    constructor(){
        super(400, "The role field must be 'ADMIN' or 'NORMAL'.")
    }
}