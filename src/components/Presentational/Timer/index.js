import React from 'react';

import './index.css';

export default function Timer() {
  return (
    <main className='clock-container'>
      <p className='main-clock'>25:00</p>
      <button className='clock-buttons'>+</button>
      <button className='clock-buttons'>-</button>
    </main>
  )
}