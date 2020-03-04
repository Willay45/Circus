import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";
import NavBar from "./components/global-ui/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={NavBar} />
      </Switch>
    </div>
  );
}

export default App;
