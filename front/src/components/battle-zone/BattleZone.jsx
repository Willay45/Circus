import React from 'react';
import NavBar from "../global-ui/navbar/NavBar";
import FormBattleZone from "./form-battle-zone/FormBattleZone";
import './BattleZone.css';
const BattleZone = () => {
  return (
    <div>
      <NavBar />
      <div className="battle-zone">
        <div className="battle-zone-title">
          <h1>Battle Zone</h1>
        </div>
        <div className="battle-zone-description">
          <h2>Bienvenue dans la Battle Zone</h2>
          <p>
            Avare de sensation et de gomme brulée. la battle Zone est fait pour toi.
            Des épreuves toujours plus epic et périeuse t'attende.
            Renseigne le formulaire pour t'inscrire entant que pilote pour le prochain run.
            Tu resevra un Snap 24h avant pour te prévenir de l'endroit et l'heure du rendez-vous.
            La Battle Zone a lieux 1 fois par mois, alors prépare toi bien pour cette épreuve.
          </p>
        </div>
        <div>
          <FormBattleZone/>
        </div>
      </div>
    </div>
  );
};

export default BattleZone;