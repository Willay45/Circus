import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";
import BattleZone from "./components/battle-zone/BattleZone";
import Watcher from "./components/watcher/Watcher";
import DashBoard from "./components/admin/DashBoard";
import Garage from "./components/garage/Garage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/admin'} component={DashBoard} />
        <Route exact path={'/battle-zone'} component={BattleZone} />
        <Route exact path={'/watcher'} component={Watcher} />
        <Route exact path={'/garage'} component={Garage} />
      </Switch>
    </div>
  );
}

export default App;
