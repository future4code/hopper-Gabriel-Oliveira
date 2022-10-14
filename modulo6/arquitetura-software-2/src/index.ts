import {app} from "./app"
import { moviesRouter } from "./routes/moviesRouter";
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter);
app.use("/movies", moviesRouter);

