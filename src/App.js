import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage.js';
import NavbarPage from './components/Navbar';
import Favorites from './components/Favorites';
import { Route, Switch } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
    
      <NavbarPage/>
        
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/favorites" component={Favorites} />

      </Switch>
      
    </div>
  );
}

export default App;
