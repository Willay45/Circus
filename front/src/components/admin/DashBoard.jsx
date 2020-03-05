import React, { useState, useEffect } from 'react';
import {getDriver, getWatcher} from "../../api/Api";
import DriverCard from "./driver-card/DriverCard";
import WatcherCard from "./watcher-card/WatcherCard";

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
    <div>
      <h1>DashBoard</h1>
      <div>
        {drivers.map((driver, index) => (
          <DriverCard
            car={driver.car}
            pseudo={driver.pseudo}
            snap={driver.snap}
            key={index}/>
        ))}
      </div>
      <div>
        {watchers.map((watcher, index) => (
          <WatcherCard snap={watcher.snap} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;