import express from "express";
import launchesRouter from "./controllers/launches";

const app = express();

app.use("/launches", launchesRouter);

export default app;
