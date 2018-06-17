import React from 'react';

import './index.css';
import Tally from '../Tally';

export default function Timer({ minutes, seconds, incTime, decrTime, tally }) {
  return (
    <main className='clock-container'>
      <p className='main-clock'>{`${minutes}:${seconds}`}</p>
      <Tally tally={tally}/>
      <button onClick={incTime}><i className="material-icons btns">add_circle</i></button>
      <button onClick={decrTime}><i className="material-icons btns">remove_circle</i></button>
    </main>
  )
}

// Add PropTypes and Default Props