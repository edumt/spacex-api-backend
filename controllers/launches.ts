import { Router } from "express";

const launchesRouter = Router();

launchesRouter.get("/next", (_, res) => {
  fetch("https://api.spacexdata.com/v4/launches/next")
    .then((data) => data.json())
    .then((data) => res.json(data));
});

launchesRouter.get("/latest", (_, res) => {
  fetch("https://api.spacexdata.com/v4/launches/latest")
    .then((data) => data.json())
    .then((data) => res.json(data));
});

export default launchesRouter;
