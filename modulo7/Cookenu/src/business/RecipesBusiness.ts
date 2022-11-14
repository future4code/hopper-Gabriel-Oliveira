import { RecipesDataBase } from "../data/RecipesDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "../error/CustomError";
import { UserNotFound } from "../error/EmailNotFound";
import { InvalidRequest } from "../error/InvalidRequest";
import { Unathorized } from "../error/Unauthorized";
import { InputSearchRecipe, RecipesInputDTO } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";

const authenticator = new Authenticator();
const userDataBase = new UserDataBase();
const recipesDataBase = new RecipesDataBase();

export class RecipesBusiness {
  public createRecipes = async (input: RecipesInputDTO) => {
    try {
      const { title, description, token } = input;

      if (!title || !token) {
        throw new InvalidRequest();
      }

      const id: string = generateId();
      const tokenData = await authenticator.getTokenData(token);
      const validateUser = await userDataBase.getUserByToken(tokenData.id);

      if (!validateUser) {
        throw new UserNotFound();
      }

      if (!tokenData) {
        throw new Unathorized();
      }

      const recipe = {
        id,
        title,
        description,
        author_id: tokenData.id,
      };

      const result = await recipesDataBase.createRecipe(recipe);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  // public getRecipeById = async (input: InputSearchRecipe) => {
  //   try {
  //     const { token, id } = input;

  //     if (!token || !id) {
  //       throw new InvalidRequest();
  //     }
  //     const recipe = await recipesDataBase.getRecipeById(id)
  //     const tokenData = authenticator.getTokenData(token);
  //     const verifyUser = await userDataBase.getUserByToken(
  //       (
  //         await tokenData
  //       ).id
  //     );

  //     if (!verifyUser) {
  //       throw new Unathorized();
  //     }
  //     if(!recipe){
  //       throw new Error("");
        
  //     }

  //   } catch (error: any) {
  //     throw new CustomError(400, error.message);
  //   }
  // };
}
