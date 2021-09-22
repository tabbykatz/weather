import express from "express";
import fetch from "node-fetch";

const api = {
  key: "69a17d2dc6f7fe84af1160bf8322b9bd",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const weatherRouter = express.Router();

weatherRouter.get("/:city", async (request, response) => {
  const url = `${api.base}${request.params.city}&units=imperial&appid=${api.key}`;
  const weather = await fetch(url);
  const weatherJson = await weather.json();

  response.json(weatherJson);
});

export default weatherRouter;
