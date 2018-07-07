import React from "react";
import PropTypes from 'prop-types';

import "./index.css";

Actions.propTypes = {
  start: PropTypes.func,
  reset: PropTypes.func
}

export default function Actions({ start, reset, pause, restart, isPaused }) {
  return (
    <div className="action-btns">
      <button 
      className="btn start" 
      onClick={isPaused ? restart : start}>
      {isPaused ? 'Restart' : 'Start'}</button>
      <button className="btn pause" onClick={pause}>Pause</button>
      <button className="btn reset" onClick={reset}>Reset</button>
    </div>
  );
}


