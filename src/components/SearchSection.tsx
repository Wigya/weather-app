<<<<<<< HEAD
import React from "react";
=======
import React, { ReactElement } from "react";
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

type props = {
<<<<<<< HEAD
  inputCity: string;
  setInputCity: React.Dispatch<React.SetStateAction<string>>;
  apiData: Array<object>;
  setApiData: React.Dispatch<React.SetStateAction<Array<any>>>;
  setLatitudeLongitude: React.Dispatch<React.SetStateAction<Array<string>>>;
};

function SearchSection({
  inputCity,
  setInputCity,
  apiData,
  setApiData,
  setLatitudeLongitude,
}: props) {
  return (
    <div className="bg-searchBar-gray w-1/4 h-600px flex min-w-fit p-2">
      <SearchBar
        {...{
          inputCity,
          setInputCity,
          apiData,
          setApiData,
          setLatitudeLongitude,
        }}
      />
=======
  children: ReactElement;
};

function SearchSection({ children }: props) {
  return (
    <div className="bg-searchBar-gray min-w-[300px] w-1/4 min-h-600px h-600px flex">
      {children}
>>>>>>> 243ec292ceb7316398ad241438feda1c435f30ce
    </div>
  );
}

export default SearchSection;
