import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";
import "dotenv/config";

const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    return "postgresql://placeholder@localhost/placeholder";
  }
  return url;
};

const sql = neon(getDatabaseUrl());
const db = drizzle(sql, { schema });

export { sql };

export default db;
