import { app } from "./app";
import { postsRouter } from "./router/PostRouter";
import { userRouter } from "./router/UserRouter";


app.use('/user', userRouter);
app.use('/posts', postsRouter);