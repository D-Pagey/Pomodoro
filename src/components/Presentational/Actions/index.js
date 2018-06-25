import React from "react";
import PropTypes from 'prop-types';

import "./index.css";

Actions.propTypes = {
  start: PropTypes.func,
  reset: PropTypes.func
}

export default function Actions({ start, reset }) {
  return (
    <div className="action-btns">
      <button className="btn start" onClick={start}>Start</button>
      <button className="btn pause" disabled>Pause</button>
      <button className="btn reset" onClick={reset}>Reset</button>
    </div>
  );
}


