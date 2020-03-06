import React, { useState } from 'react';
import './FormWatch.css';
import {postWatcher} from "../../../api/Api";
import playSound from "../../../tech/music.service";

const FormWatcher = () => {
  const [snap, setSnap] = useState();

  const sendWatcher = async () => {
    const watcher = {
      snap
    };
    try {
      await postWatcher(watcher);
    } catch (error) {
      alert('Erreur de la réservation')
    }
  };
  return (
    <div className="watcher-form">
      <form onSubmit={() => {
        playSound('horn');
        sendWatcher();
      }}>
        <label className="watcher-input" htmlFor="">Snap</label>
        <input className="watcher-input" type="pseudo" onChange={event => setSnap(event.target.value)}/>

        <input className="watcher-submit" type="submit"/>
      </form>
    </div>
  );
};

export default FormWatcher;