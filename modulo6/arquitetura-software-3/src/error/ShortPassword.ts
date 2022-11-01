import { CustomError } from "./CustomError";


export class ShortPassword extends CustomError{
    constructor(){
        super(411, "Sua senha deve conter no mínimo 6 caracteres.")
    }
}