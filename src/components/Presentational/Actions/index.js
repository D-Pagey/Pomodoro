import React from "react";

import "./index.css";

export default function Actions({ start, reset }) {
  return (
    <div className="action-btns">
      <button className="btn start" onClick={start}>Start</button>
      <button className="btn reset" onClick={reset}>Reset</button>
    </div>
  );
}

// Add PropTypes and Default Props