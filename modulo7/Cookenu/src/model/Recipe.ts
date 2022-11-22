export type Recipes = {
    id: string,
    title: string,
    description: string,
    author_id: string
}

export interface RecipesInputDTO {
    title: string,
    description: string,
    token: string
}


export interface InputSearchRecipe{
    token: string,
    id: string
  }

export interface RecipeOutput {
    id: string,
    title: string,
    description: string,
    created_at: string
}
