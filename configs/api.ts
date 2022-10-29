import { config } from "dotenv";
config();

const SPACEX_API_URL = process.env.SPACEX_API_URL;

export { SPACEX_API_URL };
