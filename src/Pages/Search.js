import React from 'react'

import text from '../Components/NavBar/NavBar'
import "./Search.css"

function Search() {
    return (
        <div className='search-pg'>
            <h1>{text ? text : ""}</h1>
        </div>
    )
}

export default Search
