import React from 'react';

import './index.css';

export default function Timer({ minutes, seconds, incTime, decrTime }) {
  return (
    <main className='clock-container'>
      <p className='main-clock'>{`${minutes}:${seconds}`}</p>
      <button onClick={incTime}><i className="material-icons btns">add_circle</i></button>
      <button onClick={decrTime}><i className="material-icons btns">remove_circle</i></button>
    </main>
  )
}

// Add PropTypes and Default Props