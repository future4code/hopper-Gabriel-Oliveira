import { CustomError } from "./CustomError";

export class RecipeNotFound extends CustomError{
    constructor(){
        super(404, "Recipe not found.")
    }
}