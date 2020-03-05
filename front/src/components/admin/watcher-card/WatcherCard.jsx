import React from 'react';
import './WatcherCard.css';
import {deleteWatcher} from "../../../api/Api";

const WatcherCard = ({ snap, id }) => {
  return (
    <div className="watcher-card-container">
      <p>{id}</p>
      <p>{snap}</p>
      <i
        style={{color: 'white', cursor: 'pointer'}}
        className="fas fa-trash-alt"
        onClick={async () => {
          await deleteWatcher(id);
          window.location.reload(true);
        }}></i>
    </div>
  );
};

export default WatcherCard;