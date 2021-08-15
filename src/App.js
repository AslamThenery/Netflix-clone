import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {horrorMovies, commedyMovies} from "./constants/url"
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title = "Horror" url = {horrorMovies}/>
        <RowPost title = "Commedy" url = {commedyMovies}/>
        
    </div>
  );
}

export default App;
