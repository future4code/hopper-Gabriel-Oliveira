import { Request, Response } from "express";
import { RecipesBusiness } from "../business/RecipesBusiness";

const recipesBusiness = new RecipesBusiness();

export class RecipesController {
  public createRecipes = async (req: Request, res: Response) => {
    try {
      const { title } = req.body;
      let {description} = req.body;
      const token = req.headers.authorization as string

      if(!description){
        description = "No description provided"
      }

      const input = {
        title,
        description,
        token
      };

       await recipesBusiness.createRecipes(input);

      res.status(201).send("Recipe created successfully!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getRecipeById = async (req: Request, res: Response) =>{
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const search = {
        token,
        id,
      };

      const result = await recipesBusiness.getRecipeById(search);
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
