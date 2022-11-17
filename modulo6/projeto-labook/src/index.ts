import { app } from "./app";
import { friendsRouter } from "./router/FriendRouter";
import { postsRouter } from "./router/PostRouter";
import { userRouter } from "./router/UserRouter";


app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/friend', friendsRouter);