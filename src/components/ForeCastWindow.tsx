import React from "react";
import { useEffect, useState } from "react";
import CurrentForeCast from "./CurrentForeCast";
import FiveDayForeCast from "./SixDayForeCast";

type props = {
  LatitudeLongitude: Array<string>;
};

function ForeCastWindow({ LatitudeLongitude }: props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [renderElement, setRenderElement] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<any>();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${LatitudeLongitude[0]}&lon=${LatitudeLongitude[1]}&units=metric&appid=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        data.cod === "200" && setRenderElement(true);
      });
  }, [LatitudeLongitude]);

  console.log(weatherData);
  return (
    <div className="w-full">
      <CurrentForeCast {...{ weatherData, renderElement }} />
      <FiveDayForeCast {...{ weatherData, renderElement }} />
    </div>
  );
}

export default ForeCastWindow;
