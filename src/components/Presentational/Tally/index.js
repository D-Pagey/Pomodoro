import React from 'react';

import './index.css';

export default function Tally({ tally }) {
  return (
    <div className='tally-container'>
      <p className='tally'>{tally}</p>
    </div>
  )
}