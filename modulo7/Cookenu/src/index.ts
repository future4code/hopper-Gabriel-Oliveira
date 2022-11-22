import {app} from "./app"
import { recipesRouter } from "./router/RecipesRouter"
import { userRouter } from "./router/UserRouter"



app.use('/user', userRouter)
app.use('/recipe', recipesRouter)