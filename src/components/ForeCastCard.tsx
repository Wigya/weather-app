import React from "react";

type props = {
  icon: any;
  date: string;
  temp: number;
  pressure: number;
  renderElement: boolean;
};

function ForeCastCard({ icon, date, temp, pressure, renderElement }: props) {
  return (
    <div className="h-80 w-40 bg-blue-500 rounded-xl mt-1 ml-4">
      {renderElement && (
        <div>
          <div className="bg-blue-600 w-full h-12 rounded-t-xl text-white flex justify-center items-center font-semibold text-xl">
            {date}
          </div>

          <div className="flex items-center w-40 flex-col text-white space-y-8">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              className="w-28 h-28 mt-4"
            />
            <p>{temp} °C</p>
            <p>{pressure} hPa</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForeCastCard;
