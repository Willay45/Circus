import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <NavLink activeClassName="active" exact to='/'>
        <img
          className="nav-bar-logo"
          src="https://image.noelshack.com/fichiers/2020/10/3/1583327987-e36.png"
          alt="logo"
        />
      </NavLink>
      <div className="nav-bar-container-text">
         <p>Les Show</p>
         <p>Nos Pilotes</p>
          <p>Battle Zone</p>
      </div>
    </div>
  );
};

export default NavBar;