import React from 'react';

import './index.css';

export default function Timer() {
  return (
    <main className='clock-container'>
      <p className='main-clock'>25:00</p>
      <button><i class="material-icons btns">add_circle</i></button>
      <button><i class="material-icons btns">remove_circle</i></button>
    </main>
  )
}