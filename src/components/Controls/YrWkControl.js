import React from 'react';

const YrWkControl = (props) => {

  const Weeks = () => {
    const wks = [];
    for (let i = 1; i <= 17; i += 1) {
      wks.push(<option key={`week-${i}`} value={i}>{i}</option>)
    }
    return wks;
  }

  const Years = () => {
    const yrs = [];
    for (let i = 2017; i >= 2014; i -= 1) {
      yrs.push(<option key={`year-${i}`} value={i}>{i}</option>)
    }
    return yrs;
  }

  return (
    <div>
      Season
      <select onChange={(year) => props.setYear(year)}>
        <Years />
      </select>
      Week
      <select onChange={(week) => props.setWeek(week)} >
        <Weeks />
      </select>
    </div>
  )
}

export default YrWkControl;