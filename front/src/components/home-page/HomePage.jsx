import React from 'react';
import './HomePage.css'
import NavBar from "../global-ui/navbar/NavBar";
import { NavLink } from "react-router-dom";
import playSound from '../../tech/music.service'

const HomePage = () => {
  return (
      <div className="home-container">
        <div className="home-page-title">
          <h1>Willy fait son cirque</h1>
          <NavBar/>
        </div>

        <div className="home-page-presentaion">
          <h2>Bienvenue jeune Drifter</h2>
          <p>
            Si tu est nouveau dans la communautée, ne t'inquitète pas. Nous allons tout t'expliquer.
            Dans cette application Deux choix s'offre a toi.
          </p>
        </div>
        <div className="home-page-description-container">
          <div className="home-page-viewer">
            <h2>Spéctateur</h2>
            <p>
              Si tu est fan de drift quoi de mieux que de voir
              l'une de nos monture fétiche en pleinne glisse,
              avec son jolie bruit de rupteur. Rejoins nous en tant que spéctateur au prochain run.
            </p>
            <NavLink activeClassName="active" to='/watcher' className="linkhome">
              <p onClick={() => {playSound('horn')}} className="show-button">Watcher</p>
            </NavLink>
          </div>

          <div className="home-page-driver">
            <h2>Pilote</h2>
            <p>
              Si en plus de voir de fabuleuse battle tu a envie de tenter ta chance.
              Rejoin nous dans la battle zone pour des affrontement toujours plus epic,
              m'étant vos compétences de pilote a rude épreuve.
            </p>
            <NavLink activeClassName="active" to='/battle-zone' className="linkhome">
              <p onClick={() => {playSound('horn')}} className="battle-zone-button">Battle Zone</p>
            </NavLink>
          </div>
        </div>

      </div>
  );
};

export default HomePage;