import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import TvShowsPost from '../Components/TvShows/TvShowsPost'
import {latestTvShows, popularTvShows} from "../constants/url"

function Tvshows() {
    return (
        <div>
            <NavBar/>
            {/* <TvShowsPost tittle="Top Rated" url={topratedTvShows}/> */}
             <TvShowsPost tittle="Popular" url={popularTvShows}/>
            <TvShowsPost tittle="Upcoming" url={latestTvShows}/> 
        </div>
    ) 
}

export default Tvshows
