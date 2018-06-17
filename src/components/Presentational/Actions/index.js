import React from "react";

import "./index.css";

export default function Actions({ deadline }) {
  return (
    <div className="action-btns">
      <button className="start-btn" onClick={deadline}>
        Start
      </button>
    </div>
  );
}

// Add PropTypes and Default Props