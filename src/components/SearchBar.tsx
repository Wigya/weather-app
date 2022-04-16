import React from "react"
import {useEffect, useState} from 'react'
import { Search32, MisuseOutline32 } from '@carbon/icons-react'


const API_KEY = process.env.REACT_APP_API_KEY


function SearchBar(props:any) {


    // geocoding api request to get Latitude and Longitude
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.inputCity}&limit=5&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => {
                props.setApiData(data)
            })
    }, [props.inputCity])

    console.log(props.inputCity)

    const handleChange = (event:any) => {
        props.setInputCity(event.target.value)
    }

    const clearInput = () => {
        props.setInputCity('')
    }


    return (
        <div className="flex items-center w-full flex-col">
            <div className="flex mt-5">
                <input type="text" placeholder="Enter city name..." onChange={handleChange} autoComplete="off" className="w-64 h-12 p-2 focus:outline-none" value={props.inputCity} name='inputCity' />
                {props.inputCity.length === 0 ? <Search32 className="text-black h-12 pr-1 bg-white cursor-pointer"/> : <MisuseOutline32 className="text-black h-12 pr-1 bg-white cursor-pointer" onClick={clearInput} />}
            </div>
            <div className="mt-1">
                    {props.apiData.length > 0 && props.apiData.map((item: { [x: string]: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined }) => <a href=""><div className="bg-white w-72 p-2 hover:bg-gray-300">{item['name']}    {item['state']}</div></a>)}

            </div>



        </div>
    )
}

export default SearchBar