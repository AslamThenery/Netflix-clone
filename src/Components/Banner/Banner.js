import React, { useEffect, useState } from 'react'
import axios from '../axios'

import {API_KEY, imageUrl} from '../../constants/constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
              let movies =    response.data.results;       
                console.log(movies)
                // let movieNum = Math.floor(Math.random() *movies.length);
                // console.log(movies[movieNum]);
                setMovie(movies[15])
        })
    }, [])
    return (
        <div  style = {{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}  </h1>
                {/* <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div> */}
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        
        </div>
    )
}

export default Banner
