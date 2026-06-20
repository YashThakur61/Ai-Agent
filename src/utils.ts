import * as dotenv from "dotenv";

dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
export const SERPAPI_API_KEY = process.env.SERPAPI_API_KEY || "";
