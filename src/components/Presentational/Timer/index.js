import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import Tally from '../Tally';

Timer.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  incTime: PropTypes.func,
  decrTime: PropTypes.func,
  status: PropTypes.string
}

Timer.defaultProps = {
minutes: 25,
seconds: 0,
status: 'work'
}

export default function Timer({ minutes, seconds, incTime, decrTime, tally, 
  status }) {
    
  return (
    <main className='clock-container'>
      <h3 className='subtitle'>{status === 'work' ? 'Work Time' : 'Break Time'}</h3>
      <p className={`main-clock + ${status}`}>{`${minutes}:${seconds}`}</p>
      <Tally tally={tally}/>
      <div className='increment-container'>
        <button onClick={incTime}>
        <i className="material-icons btns">add_circle</i></button>
        <button onClick={decrTime}>
        <i className="material-icons btns">remove_circle</i></button>
      </div>
    </main>
  )
}