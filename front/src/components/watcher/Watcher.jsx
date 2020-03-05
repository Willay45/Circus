import React from 'react';
import NavBar from "../global-ui/navbar/NavBar";
import './Watcher.css';
import FormWatcher from "./form-watcher/FormWatcher";

const Watcher = () => {
  return (
      <div className="watcher-container">
        <div className="watcher-title">
          <h1>Watcher</h1>
          <NavBar/>
        </div>
        <div className="watcher-description">
          <h2>Bienvenue</h2>
          <p>
            Tu est fan de drift rejoind nos Battles Zones entan que Watcher en t'inscrivat ici.
            Tu resevra un Snap 24h avant pour te prévenir de l'endroit et l'heure du rendez-vous.
            La Battle Zone a lieux 1 fois par mois, alors prépare toi bien pour cette épreuve.
          </p>
        </div>
        <div>
          <FormWatcher/>
        </div>
      </div>
  );
};

export default Watcher;