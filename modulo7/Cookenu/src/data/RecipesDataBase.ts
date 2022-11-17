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
      const result = await RecipesDataBase.connection(TABLE_RECIPES)
      .select()
      .where({id})
      
      return result[0]
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  }
}
