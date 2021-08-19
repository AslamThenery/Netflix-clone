import React from 'react'
import { BrowserRouter as Router,
          Route,
          Link,
          Switch
          } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import './App.css'


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/search">
        <Search/>
      </Route>
    </Router>
        
    </div>
  );
}

export default App;
