import {app} from "./app"
import { userRouter } from "./routes/UserRouter"


app.use('/user', userRouter)