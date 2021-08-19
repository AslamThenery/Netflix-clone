import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import { horrorMovies, commedyMovies } from '../constants/url'
import "./Home.css"
function Home() {
    return (
        <div>
        <NavBar/>
        <Banner/>
        <RowPost title = "Horror" url = {horrorMovies}/>
        <RowPost title = "Commedy" url = {commedyMovies} app / >
        </div>
    )
}

export default Home
