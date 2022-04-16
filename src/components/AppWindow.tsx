import React from 'react'
import { useState } from 'react'
import ForeCast from './ForeCast'
import SearchSection from './SearchSection'


function AppWindow() {
    const [inputCity, setInputCity] = useState('')
    const [apiData, setApiData] = useState([])

    console.log(apiData)

    function handleSearchBarOptions(event: any) {
        return event.target.textContent
    }


    return (
        <div className="flex">
            <SearchSection inputCity={inputCity} setInputCity={setInputCity} apiData={apiData} setApiData={setApiData} />
            <ForeCast inputCity={inputCity} setInputCity={setInputCity} apiData={apiData} setApiData={setApiData}/>
        </div>
    )
}

export default AppWindow