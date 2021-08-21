import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import "./App.css";
import Tvshows from "./Pages/Tvshows";
import Movies from "./Pages/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/search">
            <Search />
          </Route>
          <Route  path="/movies">
            <Movies />
          </Route>
          <Route  path="/tvshows">
            <Tvshows />
          </Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
