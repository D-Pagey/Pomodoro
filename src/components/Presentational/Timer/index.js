import React from 'react';

import './index.css';

export default function Timer({ minutes, seconds }) {
  return (
    <main className='clock-container'>
      <p className='main-clock'>{`${minutes}:${seconds}`}</p>
      <button><i class="material-icons btns">add_circle</i></button>
      <button><i class="material-icons btns">remove_circle</i></button>
    </main>
  )
}