import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // const [searchTxt, setsearchTxt] = useState()
  const history = useHistory();

  // const searchHandle = () => {
  //   history.push("/Search");
  //   // export const text = searchTxt
  // };
  const showsHandle = (e) => {
    e.preventDefault();
    history.push("/tvshows");
  };
  const moviesHandle = (e) => {
    e.preventDefault();
    history.push("/movies");
  };
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div className="pages">
        <button className="nav-btn" >Home</button>
        <button className="nav-btn" onClick={showsHandle}>
          Tv Shows
        </button>
        <button className="nav-btn" onClick={moviesHandle}>
          Movies
        </button>
        <button className="nav-btn" >My List</button>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search"
        name=""
        id=""
      />
      <button
        className="search-button"
        
        
      >
        Search
      </button>

      {/* <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/> */}
    </div>
  );
}

export default NavBar;
