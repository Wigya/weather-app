import React from 'react'

type props = {
    weatherData: any
}

function CurrentForeCast({weatherData} : props) {
    return (
        <div>
            {weatherData == [] && <h1 className="text-3xl font-semibold">{weatherData.city.name}</h1>}
        </div>
    )
}



export default CurrentForeCast