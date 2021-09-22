import * as React from "react";

import * as apiClient from "./apiClient.js";

const Weather = (user) => {
  const [weather, setWeather] = React.useState({});

  const loadWeather = async () =>
    setWeather(await apiClient.getWeather("Berkeley"));
  React.useEffect(() => {
    loadWeather();
  }, []);

  return <div>{Object.keys(weather)}</div>;
};

export default Weather;
