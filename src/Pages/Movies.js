import React from 'react'
import MoviesPost from '../Components/MoviesPost/MoviesPost'
import NavBar from '../Components/NavBar/NavBar'
import {commedyMovies, horrorMovies}  from "../constants/url"

function Movies() {
    return (
        <div>

<NavBar name = "nav-btn"/>

            <MoviesPost  title="Horror" url = {horrorMovies}/>
            <MoviesPost  title="Commedy" url = {commedyMovies}/>
            
        </div>
    )
}

export default Movies
