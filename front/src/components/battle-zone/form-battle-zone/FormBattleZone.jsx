import React from 'react';
import './FormBattleZone.css';

const FormBattleZone = () => {
  return (
    <div className="battle-zone-form">
      <form className="battle-zone-form-container">
        <label className='battle-input' htmlFor="">Pseudo</label>
        <input className='battle-input' type="pseudo"/>

        <label className='battle-input' htmlFor="">Véhicule</label>
        <input className='battle-input' type="text"/>

        <label className='battle-input' htmlFor="">Snap</label>
        <input className='battle-input' type="pseudo"/>

        <input className="battle-submit" type="submit"/>
      </form>
    </div>
  );
};

export default FormBattleZone;