import React from 'react'

function SearchBar() {
    return (
        <div className="bg-searchBar-gray w-1/4 h-600px flex">
            <form action="" className="border-solid border-2 h-24 ml-2 mt-2 w-11/12">
                <h3 className="font-medium text-2xl mb-2 ml-2 mt-2">Search for a City</h3>
                <input type="text" name="city" id="" className="rounded-md ml-2 mr-2 p-1"/>
                <button className="bg-blue-600 border-blue-600 text-center align-middle rounded-lg px-2 py-2 hover:bg-blue-800 text-white">Search</button>
            </form>

        </div>
    )
}


export default SearchBar