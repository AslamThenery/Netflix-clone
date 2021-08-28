import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [searchTxt, setsearchTxt] = useState();
 const [isActive, setisActive] = useState(true)
  const history = useHistory();

  const homeHandle = () => {
    history.push("/");
    // export const text = searchTxt
  };
  const searchHandle = () => {
    if (searchTxt) {
      history.push({
        pathname: "/search",
        state: { searchTxt }, // your data array of objects
      });
    }
    // export const text = searchTxt
  };
  const showsHandle = (e) => {
    e.preventDefault();
    history.push("/tvshows");
  };
  const moviesHandle = (e) => {
    e.preventDefault();
    history.push("/movies");
  };
    function classHandle(){

      console.log();
           setisActive(!isActive)
           console.log("icon Clicked");
           
           
    // document.getElementById("icon").style(displ)
  }
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      {/* <div className="pages"> */}
      <i onClick={classHandle} id="icon" class="nav-icon fa fa-bars"></i>
     { isActive ?
      <div className="nav-opts ">
       
        <button className="nav-btn" onClick={homeHandle}>
          Home
        </button>
        <button className="nav-btn" onClick={showsHandle}>
          Tv Shows
        </button>
        <button className="nav-btn" onClick={moviesHandle}>
          Movies
        </button>
      </div> :""}
      {/* <button className="nav-btn" >My List</button> */}

      {/* </div> */}
      
        <div className="input-btn">
      <input className="search-input" onChange={(e) => setsearchTxt(e.target.value)} type="text" placeholder="Search"/>
      <button className="search-button" onClick={searchHandle}>
        Search
      </button>
      
      </div> 

     {/* <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/> */}
    </div>
  );
}

export default NavBar;
