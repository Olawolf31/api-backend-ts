import express, {Application, Request, Response, NextFunction} from "express";
import morgan from "morgan";
import cors from "cors"
import bodyParser from "body-parser";
import movieRouter from "./routes/moviesRoutes";
import { PORT } from "./config";
import { connectDB } from "./config/db";

const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use("/api/movies", movieRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World");
})

app.listen(PORT, async () => {
    console.log(`Server on port ${PORT}`);
    await connectDB();
})