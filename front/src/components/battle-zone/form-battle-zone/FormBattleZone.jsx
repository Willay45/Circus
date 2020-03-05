import React, { useState } from 'react';
import './FormBattleZone.css';
import { postDriver } from "../../../api/Api";

const FormBattleZone = () => {
  const [pseudo, setPseudo] = useState();
  const [car, setCar] = useState();
  const [snap, setSnap] = useState();

  const sendDriver = async () => {
    const driver = {
      pseudo,
      car,
      snap
    };
    try {
      await postDriver(driver);
    } catch (error) {
      alert('Erreur de la réservation')
    }
  };

  return (
    <div className="battle-zone-form">
      <form className="battle-zone-form-container" onSubmit={sendDriver}>
        <label className='battle-input' htmlFor="">Pseudo</label>
        <input className='battle-input' type="pseudo" onChange={event => setPseudo(event.target.value)}/>

        <label className='battle-input' htmlFor="">Véhicule</label>
        <input className='battle-input' type="text" onChange={event => setCar(event.target.value)}/>

        <label className='battle-input' htmlFor="">Snap</label>
        <input className='battle-input' type="pseudo" onChange={event => setSnap(event.target.value)}/>

        <input className="battle-submit" type="submit"/>
      </form>
    </div>
  );
};

export default FormBattleZone;