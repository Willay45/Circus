import React from 'react';
import './FormWatch.css';

const FormWatcher = () => {
  return (
    <div className="watcher-form">
      <form>
        <label className="watcher-input" htmlFor="">Snap</label>
        <input className="watcher-input" type="pseudo"/>

        <input className="watcher-submit" type="submit"/>
      </form>
    </div>
  );
};

export default FormWatcher;