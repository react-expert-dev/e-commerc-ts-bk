import { config } from "dotenv";

config();

export const ENV = {
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
};
