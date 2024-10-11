"use server"

import { db } from "../../db";
import { users } from "../../db/schema";

export async function insertOneUser(username:string, isRat:boolean, q1Correct:boolean, q2Correct:boolean) {
    await db.insert(users).values({name: username, isRat: isRat, q1Correct: q1Correct, q2Correct:q2Correct});
}