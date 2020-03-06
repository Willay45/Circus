import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import playSound from "../../../tech/music.service";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <NavLink activeClassName="active" exact to='/' className='link'>
        <i onClick={() => {playSound('clutch')}} style={{color: "white"}} className="fas fa-warehouse fa-2x"></i>
      </NavLink>
      <NavLink activeClassName="active" to='/watcher' className='link'>
        <i onClick={() => {playSound('clutch')}} style={{color: "white"}} className="fas fa-binoculars fa-2x"></i>
      </NavLink>
      <NavLink activeClassName="active" to='/battle-zone' className='link'>
        <i onClick={() => {playSound('clutch')}} style={{color: "white"}} className="fas fa-car fa-2x"></i>
      </NavLink>
      <NavLink activeClassName="active" to='/garage' className='link'>
        <i onClick={() => {playSound('clutch')}} style={{color: "white"}} className="fas fa-wrench fa-2x"></i>
      </NavLink>
    </div>
  );
};

export default NavBar;