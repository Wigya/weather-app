import React from 'react'


function ForeCast(props: any) {
    // console.log(props.apiData)
    
    return (
        <div>
            <p>{JSON.stringify(props.apiData)}, {JSON.stringify(props.apiData)}</p>
            
        </div>
    )
}

export default ForeCast