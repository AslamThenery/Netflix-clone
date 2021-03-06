import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import { trending } from '../constants/url'
import "./Home.css"
function Home() {
    return (
        <div>
        <NavBar name = "nav-btn"/>
        <Banner/>
        {/* <RowPost title = "Horror" url = {horrorMovies}/>
        <RowPost title = "Commedy" url = {commedyMovies} app / > */}
        <RowPost title = "Trending" url = {trending} / >
        </div>
    )
}

export default Home
