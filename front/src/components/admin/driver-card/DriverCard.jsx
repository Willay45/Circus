import React from 'react';

const DriverCard = ({ pseudo, car, snap}) => {
  return (
    <div>
      <p>{pseudo}</p>
      <p>{car}</p>
      <p>{snap}</p>
    </div>
  );
};

export default DriverCard;