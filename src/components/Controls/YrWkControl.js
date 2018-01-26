import React from 'react';

const YrWkControl = (props) => {

  // const Weeks = () => {
  //   const wks = [];
  //   for (let i = 17; i > 0; i -= 1) {
  //     wks.push(<option key={`week-${i}`} value={i}>{i}</option>)
  //   }
  //   return wks;
  // }

  // const Years = () => {
  //   const yrs = [];
  //   for (let i = 2017; i >= 2014; i -= 1) {
  //     yrs.push(<option key={`year-${i}`} value={i}>{i}</option>)
  //   }
  //   return yrs;
  // }

  return (
    <div>
      Season
      <select onChange={(year) => props.setYear(year)}>
        <option key={`year-2017`} value='2017'>2017</option>
        <option key={`year-2016`} value='2016'>2016</option>
        <option key={`year-2015`} value='2015'>2015</option>
        <option key={`year-2014`} value='2014'>2014</option>
      </select>
      Week
      <select onChange={(week) => props.setWeek(week)} >
        <option key={`week-1`} value='1'>1</option>
        <option key={`week-2`} value='2'>2</option>
        <option key={`week-3`} value='3'>3</option>
        <option key={`week-4`} value='4'>4</option>
        <option key={`week-5`} value='5'>5</option>
        <option key={`week-6`} value='6'>6</option>
        <option key={`week-7`} value='7'>7</option>
        <option key={`week-8`} value='8'>8</option>
        <option key={`week-9`} value='9'>9</option>
        <option key={`week-10`} value='10'>10</option>
        <option key={`week-11`} value='11'>11</option>
        <option key={`week-12`} value='12'>12</option>
        <option key={`week-13`} value='13'>13</option>
        <option key={`week-14`} value='14'>14</option>
        <option key={`week-15`} value='15'>15</option>
        <option key={`week-16`} value='16'>16</option>
        <option key={`week-17`} value='17'>17</option>
      </select>
    </div>
  )
}

export default YrWkControl;