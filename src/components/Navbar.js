import React from 'react';
import './Navbar.css';
import { Route, Switch ,Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const NavbarPage=()=>{
    return(

        <Navbar collapseOnSelect expand="lg" className="navbar-clr" fixed="top">
          <div className="container">
          {/* <Navbar.Brand href="/">Movies Search</Navbar.Brand> */}
          <Link to="/Assignment-Movie-search" className="search-link"> Movie Search </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          
          <Nav className="ml-auto">
             {/* <Nav.Link href="/favorites">Favourite Movies</Nav.Link>  */}
            <Link to="/favorites" className="favourite-link"> Favourites </Link>
            
          </Nav>
        </Navbar.Collapse>
          </div>
      
      </Navbar>

    )}

export default NavbarPage;