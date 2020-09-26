import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage.js';
import NavbarPage from './components/Navbar';
import Favorites from './components/Favorites';
import { Route, Switch ,Redirect} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
    
      <NavbarPage/>
        
      <Switch>
      <Route exact path="/Assignment-Movie-search" component={LandingPage} />
      <Route exact path="/favorites" component={Favorites} />
      <Redirect to="/Assignment-Movie-search"/>

      </Switch>
      
    </div>
  );
}

export default App;
