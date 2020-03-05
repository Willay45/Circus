import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <NavLink activeClassName="active" exact to='/' className='link'>
        <i style={{color: "white"}} className="fas fa-warehouse fa-2x"></i>
      </NavLink>
      <NavLink activeClassName="active" to='/watcher' className='link'>
        <i style={{color: "white"}} className="fas fa-binoculars fa-2x"></i>
      </NavLink>
      <NavLink activeClassName="active" to='/battle-zone' className='link'>
        <i style={{color: "white"}} className="fas fa-car fa-2x"></i>
      </NavLink>

    </div>
  );
};

export default NavBar;