import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

type props = {
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
    </div>
  );
}

export default SearchSection;
