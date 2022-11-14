import { CustomError } from "./CustomError";

export class Unathorized extends CustomError{
    constructor(){
        super(401, "Unauthorized User.")
    }
}