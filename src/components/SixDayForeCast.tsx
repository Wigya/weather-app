import React from "react";
import ForeCastCard from "./ForeCastCard";

type props = {
  weatherData: any;
  renderElement: boolean;
};

function FiveDayForeCast({ weatherData, renderElement }: props) {
  const create_cards = (weatherData: any) => {
    let foreCastCards: any = [];
    let i = 0;
    weatherData.list.slice(6).map((item: any) => {
      if (i % 6 === 0) {
        let date = item.dt_txt.slice(0, 10);
        let icon = item.weather[0].icon;
        let temp = item.main.temp;
        let pressure = item.main.pressure;
        foreCastCards.push(
          <ForeCastCard {...{ icon, date, temp, pressure, renderElement }} />
        );
      }
      i += 1;
    });
    return foreCastCards;
  };

  return (
    <div className="">
      {renderElement && (
        <div>
          <h1 className="text-3xl font-semibold ml-4">6-Day Forecast:</h1>
          <div className="flex">
            {renderElement &&
              create_cards(weatherData).map((item: any) => item)}
          </div>
        </div>
      )}
    </div>
  );
}

export default FiveDayForeCast;
