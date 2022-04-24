import React from "react";
import { useEffect, useRef } from "react";
import { Search32, MisuseOutline32 } from "@carbon/icons-react";
import InputControlled from "./Input/InputControlled";
import { createRef } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

type props = {
  inputCity: string;
  setInputCity: React.Dispatch<React.SetStateAction<string>>;
  apiData: Array<any>;
  setApiData: React.Dispatch<React.SetStateAction<Array<any>>>;
  setLatitudeLongitude: React.Dispatch<React.SetStateAction<Array<string>>>;
};

function SearchBar({
  inputCity,
  setInputCity,
  apiData,
  setApiData,
  setLatitudeLongitude,
}: props) {
  // geocoding api request to get the longtitude and latitude
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data);
      });
  }, [inputCity]);

  const handleChange = (event: any) => {
    setInputCity(event.target.value);
  };

  const clearInput = () => {
    localRef.current.value = "";
    setInputCity("");
  };

  const localRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  console.log(localRef);
  return (
    <div className="flex items-center w-full flex-col">
      <div className="flex mt-5">
        <InputControlled
          onChange={handleChange}
          name="inputCity"
          placeHolder="Enter city name..."
          value={inputCity}
          ref={localRef}
        />
        {inputCity.length === 0 ? (
          <Search32 className="text-black h-12 pr-1 bg-white cursor-pointer" />
        ) : (
          <MisuseOutline32
            className="text-black h-12 pr-1 bg-white cursor-pointer"
            onClick={clearInput}
          />
        )}
      </div>
      <div className="mt-1">
        {apiData.length > 0 &&
          apiData.map((item) => (
            <a href="#">
              <div
                className="bg-white w-72 p-2 hover:bg-gray-300"
                onClick={() => setLatitudeLongitude([item["lat"], item["lon"]])}
              >
                {item["name"]} {item["state"]}
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
