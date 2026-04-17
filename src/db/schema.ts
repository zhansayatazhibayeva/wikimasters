import { pgTable, text } from "drizzle-orm/pg-core";

export const usersSync = pgTable("usersSync", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email"),
});

export type User = typeof usersSync.$inferSelect;
