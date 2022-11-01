import express from "express";
import launchesRouter from "./controllers/launches";
import middlewares from "./utils/middlewares";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(middlewares.requestLogger);

app.use("/launches", launchesRouter);

export default app;
