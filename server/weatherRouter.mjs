import express from "express";
import fetch from "node-fetch";

const api = {
  key: "69a17d2dc6f7fe84af1160bf8322b9bd",
  base: "api.openweathermap.org/data/2.5/weather?q=",
};

const weatherRouter = express.Router();

weatherRouter.get("/:city", async (request, response) =>
  response.json(
    await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Berkeley&appid=69a17d2dc6f7fe84af1160bf8322b9bd",
    ),
  ),
);

export default weatherRouter;
