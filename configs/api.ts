import { config } from "dotenv";
config();

const SPACEX_API_URL = process.env.SPACEX_API_URL;
const API_PORT = process.env.API_PORT;

export { SPACEX_API_URL, API_PORT };
