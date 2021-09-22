import express from "express";

import * as db from "./db.mjs";

const userRouter = express.Router();

userRouter.get("/", async (request, response) => {
  const users = await db.getUsers();
  response.json(users);
});

// taskRouter.use(express.json());
// taskRouter.post("/", async (request, response) => {
//   const task = await db.addTask(request.body.name);
//   response.status(201).json(task);
// });

export default userRouter;
