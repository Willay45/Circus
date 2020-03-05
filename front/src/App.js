import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";
import BattleZone from "./components/battle-zone/BattleZone";
import Watcher from "./components/watcher/Watcher";
import NavBar from "./components/global-ui/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/battle-zone'} component={BattleZone} />
        <Route exact path={'/watcher'} component={Watcher} />
        <Route exact path={'/test'} component={NavBar} />
      </Switch>
    </div>
  );
}

export default App;
