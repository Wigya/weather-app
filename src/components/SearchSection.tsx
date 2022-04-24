import React, { ReactElement } from "react";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

type props = {
  children: ReactElement;
};

function SearchSection({ children }: props) {
  return (
    <div className="bg-searchBar-gray min-w-[300px] w-1/4 min-h-600px h-600px flex">
      {children}
    </div>
  );
}

export default SearchSection;
