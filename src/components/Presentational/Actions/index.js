import React from "react";

import "./index.css";

export default function Actions({ start }) {
  return (
    <div className="action-btns">
      <button className="start-btn" onClick={start}>
        Start
      </button>
    </div>
  );
}

// Add PropTypes and Default Props