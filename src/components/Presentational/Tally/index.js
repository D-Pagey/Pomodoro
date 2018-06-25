import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

Tally.propTypes = {
  start: PropTypes.func,
  reset: PropTypes.func
}

Tally.defaultProps = {
  tally: 0,
}

export default function Tally({ tally }) {
  return (
    <div className='tally-container'>
      <p className='tally'>{tally}</p>
    </div>
  )
}
