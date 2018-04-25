import React from 'react';
import '../style/pageControl.css';

const PageControl = ({ next, prev, showAll }) => {
  return (
    <div className="pg-control">
      <a className='pg-control-btn' onClick={prev}>Prev</a>
      <a className='pg-control-btn' onClick={next}>Next</a>
      <a className='pg-control-btn' onClick={showAll}>Show All</a>
    </div>
  )
}

export default PageControl;
