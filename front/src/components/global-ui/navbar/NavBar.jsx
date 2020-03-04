import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <NavLink activeClassName="active" exact to='/' className='link'>
        <img
          className="nav-bar-logo"
          src="https://image.noelshack.com/fichiers/2020/10/3/1583327987-e36.png"
          alt="logo"
        />
      </NavLink>
      <div className="nav-bar-container-text">
        <NavLink activeClassName="active" to='/show' className='link'>
          <p>Les Show</p>
        </NavLink>
        <NavLink activeClassName="active" to='/battle-zone' className='link'>
          <p>Battle Zone</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;