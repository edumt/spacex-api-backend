import express from "express";
import launchesRouter from "./controllers/launches";
import middlewares from "./utils/middlewares";

const app = express();
app.use(middlewares.requestLogger);

app.use("/launches", launchesRouter);

export default app;
