import { Api_116 } from '@carbon/icons-react'
import React from 'react'
import {useEffect, useState} from 'react'
import SearchBar from './SearchBar'


function SearchSection(props: any) {
    return (
        <div className="bg-searchBar-gray w-1/4 h-600px flex">
            <SearchBar inputCity={props.inputCity} setInputCity={props.setInputCity} apiData={props.apiData} setApiData={props.setApiData} />
        </div>
    )
}


export default SearchSection