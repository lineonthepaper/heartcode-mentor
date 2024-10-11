import { boolean, uuid, pgTableCreator, varchar } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `heartcodeTraining_${name}`);

export const users = createTable("user", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", {length: 32}).notNull(),
    isRat: boolean().notNull(),
    q1Correct: boolean().notNull(),
    q2Correct: boolean().notNull(),
})