import morgan from "morgan";
import { Request, Response } from "express";

const requestLogger = morgan("dev");

const unknownEndpoint = (_: Request, res: Response) => {
  res.status(404).json({ error: "unknown endpoint" });
};

export default { requestLogger, unknownEndpoint };
