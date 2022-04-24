import React from "react";
<<<<<<< HEAD
import { useEffect, useRef } from "react";
import { Search32, MisuseOutline32 } from "@carbon/icons-react";
import InputControlled from "./Input/InputControlled";
import { createRef } from "react";
=======
import { useEffect } from "react";
import { Search32, MisuseOutline32 } from "@carbon/icons-react";
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce

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
<<<<<<< HEAD
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data);
      });
=======
    if (inputCity.length !== 0) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=${API_KEY}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setApiData(data);
        });
    }
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce
  }, [inputCity]);

  const handleChange = (event: any) => {
    setInputCity(event.target.value);
  };

  const clearInput = () => {
<<<<<<< HEAD
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
=======
    setInputCity("");
  };

  return (
    <div className="flex items-center w-full flex-col">
      <div className="flex mt-5">
        <input
          type="text"
          placeholder="Enter city name..."
          onChange={handleChange}
          autoComplete="off"
          className="w-64 h-12 p-2 focus:outline-none"
          value={inputCity}
          name="inputCity"
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce
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
<<<<<<< HEAD
        {apiData.length > 0 &&
=======
        {!!(apiData.length > 0 && inputCity.length) &&
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce
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
