import * as React from "react";

import * as apiClient from "./apiClient.js";

const api = {
  base: "http://openweathermap.org/img/wn/",
};
const Weather = (user) => {
  const [weather, setWeather] = React.useState({});

  const loadWeather = async () =>
    setWeather(await apiClient.getWeather(user.city ?? "Oakland"));

  React.useEffect(() => {
    loadWeather();
  }, []);

  console.log(weather);
  return weather.name ? (
    <>
      <table>
        <thead>
          <tr>
            <th>{weather.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Math.floor(weather.main.temp)}°</td>
          </tr>
          <tr>
            <td>{weather.weather[0].main}</td>
          </tr>
          <tr>
            <td>
              <img
                src={`${api.base}${weather.weather[0].icon.replace(
                  "n",
                  "d",
                )}@2x.png`}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default Weather;
