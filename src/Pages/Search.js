import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from "../Components/NavBar/NavBar"
import SearchPost from '../Components/SearchPage/SearchPost'


// import text from '../Components/NavBar/NavBar'

function Search(props) {
    const location = useLocation()
    console.log(location.pathname);
    const text = location.state.searchTxt
    console.log(text);
   
    return (

        <div>

<NavBar name = "nav-btn"/>

        <SearchPost text ={text}/>
        </div>
    )
}

export default Search
