import React from "react";
import { useState } from "react";
import ForeCastWindow from "./ForeCastWindow";
import SearchSection from "./SearchSection";
import SearchBar from "./SearchBar";
function AppWindow() {
  const [inputCity, setInputCity] = useState<string>("");
  const [apiData, setApiData] = useState<Array<object>>([]);
  const [LatitudeLongitude, setLatitudeLongitude] = useState<Array<string>>([]);

  return (
    <div className="flex">
      <SearchSection>
        <SearchBar
          {...{
            inputCity,
            setInputCity,
            apiData,
            setApiData,
            setLatitudeLongitude,
          }}
        />
      </SearchSection>
      <ForeCastWindow {...{ LatitudeLongitude }} />
    </div>
  );
}

export default AppWindow;
