import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db",
  url: process.env.DRIZZLE_DATABASE_URL!,
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!,
  },
} as Config;
