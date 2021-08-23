import React, { useEffect, useState } from "react";

// import { useLocation } from 'react-router-dom'
import axios from "../axios";
// import {  API_KEY } from '../../constants/url';
import { API_KEY, imageUrl } from "../../constants/constants";
import "./SearchPost.css";

// import text from '../Components/NavBar/NavBar'

function SearchPost(props) {
  const [query, setquery] = useState("");
  const [searchData, setsearchData] = useState([]);
  let searchText = props.text;
  console.log(searchText);

  useEffect(() => { 
    console.log("Search text is:");
    console.log(searchText);
    setquery(searchText);
    // setquery(searchText)
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((response) => {
        console.log(response.data.results);
        setsearchData(response.data.results);
        console.log("Search Data added");
      });
  }, [searchText, query]);

  return (
    <div className="search-pg">
      {/* <h1>aslam</h1> */}
      {/* <div className="search-items"> */}
        {searchData ? 
          searchData.map((obj) => {
            return (
              <div className="search-data">
                
                {obj.backdrop_path ? <img  className="search-img" alt='' src={`${imageUrl + obj.backdrop_path}`} /> : ""}
                {obj.backdrop_path ? <h1>{obj.title}</h1> :""}
              </div>
            );
          })
         :  ""        
        }
      {/* </div> */}
    </div>
  );
}

export default SearchPost;
