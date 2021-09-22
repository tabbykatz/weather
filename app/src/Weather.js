import * as React from "react";

import * as apiClient from "./apiClient.js";

const Weather = (user) => {
  const [weather, setWeather] = React.useState({});

  const loadWeather = async () =>
    setWeather(await apiClient.getWeather("Berkeley"));
  console.log(weather);
  React.useEffect(() => {
    loadWeather();
  }, []);

  return <div>Weather here</div>;
};

export default Weather;
