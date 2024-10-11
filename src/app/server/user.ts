"use server"

import { db } from "../../db";
import { users } from "../../db/schema";

export async function insertOneUser(username:string, isRatBool:boolean, q1CorrectBool:boolean, q2CorrectBool:boolean) {
    await db.insert(users).values({name: username, isRat: isRatBool, q1Correct: q1CorrectBool, q2Correct:q2CorrectBool});
}