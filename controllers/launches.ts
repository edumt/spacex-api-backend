import { Router } from "express";

const launchesRouter = Router();

launchesRouter.get("/", (_, res) => {
  res.send("Hello");
});

export default launchesRouter;
