import React from 'react';
import './DriveCard.css';
import {deleteDriver} from "../../../api/Api";

const DriverCard = ({ pseudo, car, snap, id}) => {
  return (
    <div className="driver-card-container">
      <p>{id}</p>
      <p>{pseudo}</p>
      <p>{car}</p>
      <p>{snap}</p>
      <i
        style={{color: 'white', cursor: 'pointer', marginRight: '20px'}}
        className="fas fa-trash-alt"
        onClick={async () => {
        await deleteDriver(id);
        window.location.reload(true);
      }}></i>
    </div>
  );
};

export default DriverCard;