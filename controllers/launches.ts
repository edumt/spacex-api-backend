import { Router } from "express";
import { SPACEX_API_URL } from "../configs/api";
import { Response } from "express";

const launchesRouter = Router();

const fetchSpaceXAPI = (path: string, res: Response) =>
  fetch(`${SPACEX_API_URL}/launches/${path}`)
    .then((rawData) => rawData.json())
    .then((data) => res.json(data));

launchesRouter.get("/next", (_, res) => {
  fetchSpaceXAPI("next", res);
});

launchesRouter.get("/latest", (_, res) => {
  fetchSpaceXAPI("latest", res);
});

launchesRouter.get("/upcoming", (_, res) => {
  fetchSpaceXAPI("upcoming", res);
});

launchesRouter.get("/past", (_, res) => {
  fetchSpaceXAPI("past", res);
});

launchesRouter.post("/query", (req, res) => {
  fetch(`${SPACEX_API_URL}/launches/query`, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  })
    .then((rawData) => rawData.json())
    .then((data) => res.json(data));
});

export default launchesRouter;
