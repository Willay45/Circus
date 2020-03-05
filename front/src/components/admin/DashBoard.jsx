import React, { useState, useEffect } from 'react';
import {getDriver, getWatcher} from "../../api/Api";
import DriverCard from "./driver-card/DriverCard";
import WatcherCard from "./watcher-card/WatcherCard";
import './DashBoard.css';

const DashBoard = () => {
  const [drivers, setDrivers] = useState([]);
  const [watchers, setWatchers] = useState([]);
  useEffect(() => {
    (async () => {
      setDrivers(await getDriver());
      setWatchers(await getWatcher());
    })();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>DashBoard</h1>
      <div className="card-container">
        <div className="component-driver">
          <h2>Drivers</h2>
          {drivers.map((driver, index) => (
            <DriverCard
              car={driver.car}
              pseudo={driver.pseudo}
              snap={driver.snap}
              id={driver.id}
              key={index}/>
          ))}
        </div>
        <div className="component-watcher">
          <h2>Watchers</h2>
          {watchers.map((watcher, index) => (
            <WatcherCard snap={watcher.snap} id={watcher.id} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;