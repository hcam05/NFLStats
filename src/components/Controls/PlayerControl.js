import React from 'react';
import '../../style/playerControl.css';

const PlayerControl = (props) => {

  return (
    <div className="position-filter">
      Filter Position:&nbsp;
      <a className="position-filter-btn" onClick={() => props.filterTable('QB')}>QB</a>
      <a className="position-filter-btn" onClick={() => props.filterTable('RB')}>RB</a>
      <a className="position-filter-btn" onClick={() => props.filterTable('WR')}>WR</a>
      <a className="position-filter-btn" onClick={() => props.filterTable('TE')}>TE</a>
      <a className="position-filter-btn" onClick={() => props.filterTable('DEF')}>DEF</a>
      <a className="position-filter-btn" onClick={() => props.filterTable('K')}>K</a>
      <a className="position-filter-btn" onClick={() => props.filterTable('all')}>All</a>
      {/* <a onClick={() => props.filterTable('LB')}>LB</a>
      <a onClick={() => props.filterTable('DB')}>DB</a>
      <a onClick={() => props.filterTable('DL')}>DL</a> */}
    </div>
  )

}

export default PlayerControl;
