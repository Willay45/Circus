import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <img className="nav-bar-logo" src="https://image.noelshack.com/fichiers/2020/10/3/1583327987-e36.png" alt="logo"/>
      <div className="nav-bar-container-text">
        <p className="nav-bar-show">Les Show</p>
        <p className="nav-bar-booking">Réserver un show</p>
        <p className="nav-bar-car">Véhicules</p>
      </div>
    </div>
  );
};

export default NavBar;