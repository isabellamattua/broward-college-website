import React from 'react';
import './style/menuSass.scss';
 
import { NavLink } from 'react-router-dom';
 
const Menu = () => {
    return (
       <div class="topnav" id="myTopnav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Student -</NavLink>
          <NavLink to="/">Test</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/Pathway">Pathway</NavLink>
       </div>
    );
}
 
export default Menu;