import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { imageUrl } from "../../constants/constants";
import axios from "../axios";

function TvShowsPost(props) {
  const [shows, setShows] = useState([]);
//   const  [key, setkey] = useState("")
  const showsTrailer = (id) => {
    console.log("The id is:");
    console.log(id);
    axios.get(props.url).then((response) => {
        console.log("data is :");
        console.log(response.data.results[0].key);
        // setkey(response.data.results[0])
    //   window.open(
    //     `https://www.youtube.com/watch?v=${response.data.results[0].key}`
    //   );
    });
}
    useEffect(() => {
        axios.get(props.url).then((response) => {
          console.log("working");
            console.log(response.data.results);
            let movieDetails = response.data.results;
            console.log('images');
            console.log(movieDetails.backdrop_path);
            // for(let i=0; i=movieDeatails.length; i++){
            //     console.log(movieDeatails[i].backdrop_path);
            // }
            
            
            // movieDetails.map((obj)=>  {if(movieDetails.backdrop_path ){  setShows(movieDetails)} })
            movieDetails.map((obj)=>{if(obj.backdrop_path){setShows(response.data.results)}
        return movieDetails
        })

            
        })
     })
    return (
      <div className="movie-row">
        <h1>{props.tittle}</h1>
<div className="posters">
        { shows ?
        shows.map((obj) => (
          <img
            onClick={() => {
              showsTrailer(obj.id);
            }}
            className="poster"
            alt="poster"
            src={`${imageUrl + obj.backdrop_path }`}
          />
        )) : ""}
        </div>
      </div>
    );
  };

export default TvShowsPost;
