import { Router } from "express";
import { SPACEX_API_URL } from "../configs/api";

const launchesRouter = Router();

const fetchSpaceX = (path: string) =>
  fetch(`${SPACEX_API_URL}/launches/${path}`);

launchesRouter.get("/next", (_, res) => {
  fetchSpaceX("next")
    .then((data) => data.json())
    .then((data) => res.json(data));
});

launchesRouter.get("/latest", (_, res) => {
  fetchSpaceX("latest")
    .then((data) => data.json())
    .then((data) => res.json(data));
});

launchesRouter.get("/upcoming", (_, res) => {
  fetchSpaceX("upcoming")
    .then((data) => data.json())
    .then((data) => res.json(data));
});

launchesRouter.get("/past", (_, res) => {
  fetchSpaceX("past")
    .then((data) => data.json())
    .then((data) => res.json(data));
});

export default launchesRouter;
