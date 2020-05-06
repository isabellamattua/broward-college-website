import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/menu-logo.png';
import './style/menuSass.scss';

 

 
const Menu = () => {
    return (
       <div class="topnav" id="myTopnav">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/">Student -</NavLink>
          <NavLink to="/"> <img class="logoImage" src={logo}alt="Menu Logo"/> </NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/Pathway">Pathway</NavLink>
       </div>
       
    );
}
 
export default Menu;