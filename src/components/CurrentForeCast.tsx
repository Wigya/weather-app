import React from "react";

type props = {
<<<<<<< HEAD
    weatherData: any,
    renderElement: boolean
}

function CurrentForeCast({weatherData, renderElement} : props) {
    
    return (
        <div className="mt-6 ml-3 w-full h-4/7 border-b-2 flex">
            {renderElement && 
            <div className="flex flex-col">
                <div className='flex items-center w-full h-12'>
                <h1 className="text-3xl font-semibold">{weatherData.city.name} ({weatherData.list[0].dt_txt.slice(0, 10)})</h1>
                <img src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`} alt="" className='w-28 h-28'/>
                </div>
=======
  weatherData: any;
  renderElement: boolean;
};

function CurrentForeCast({ weatherData, renderElement }: props) {
  return (
    <div className="mt-6 ml-3 w-full h-4/7 border-b-2 flex">
      {renderElement && (
        <div className="flex flex-col">
          <div className="flex items-center w-full h-12">
            <h1 className="text-3xl font-semibold">
              {weatherData.city.name} ({weatherData.list[0].dt_txt.slice(0, 10)}
              )
            </h1>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
              alt=""
              className="w-28 h-28"
            />
          </div>
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce

          <div className="ml-6 mt-14 leading-7">
            <p>Temperature: {weatherData.list[0].main.temp} °C</p>
            <p>Humidity: {weatherData.list[0].main.humidity} %</p>
            <p>Wind Speed: {weatherData.list[0].wind.speed} KPH</p>
            <p>Pressure: {weatherData.list[0].main.pressure} hPa</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentForeCast;
