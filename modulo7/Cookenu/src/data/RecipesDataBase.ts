import { CustomError } from "../error/CustomError";
import { Recipes } from "../model/Recipe";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_RECIPES = "Cookenu_Recipes";

export class RecipesDataBase extends BaseDatabase {
  public createRecipe = async (recipe: Recipes) => {
    try {
      await RecipesDataBase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          author_id: recipe.author_id,
        })
        .into(TABLE_RECIPES);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipeById = async (id: string) =>{
    try {
      await RecipesDataBase.connection(TABLE_RECIPES)
      .select("id", "title", "description", "created_at", "author_id")
      .where({id})
      
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  }
}
