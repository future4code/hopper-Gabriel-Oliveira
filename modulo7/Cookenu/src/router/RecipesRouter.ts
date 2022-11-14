import express from 'express'
import { RecipesController } from '../controller/RecipesController';



export const recipesRouter = express.Router()


const recipesController = new RecipesController();


recipesRouter.post('/recipe', recipesController.createRecipes)
// recipesRouter.get('/:id', recipesController.getRecipeById)