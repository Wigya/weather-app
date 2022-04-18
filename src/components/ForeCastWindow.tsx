import React from 'react'
import { useEffect, useState } from 'react'
import CurrentForeCast from './CurrentForeCast'


type props = {
    LatitudeLongitude: Array<string>
}

function ForeCastWindow({LatitudeLongitude} : props) {
    let API_KEY = process.env.REACT_APP_API_KEY

    const [weatherData, setWeatherData] = useState<any>([])

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${LatitudeLongitude[0]}&lon=${LatitudeLongitude[1]}&units=metric&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => setWeatherData(data))
    }, [LatitudeLongitude])
    // const d = weatherData.list[0].main.temp
    console.log(weatherData)
    return (
        <div>
            <CurrentForeCast {...weatherData} />
        </div>
    )
}

export default ForeCastWindow