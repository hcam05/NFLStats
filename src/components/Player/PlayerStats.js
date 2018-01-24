import React from 'react';

class PlayerStats extends React.Component {

  filteredPositions() {
    let positionArr = Object.keys(this.props.positions);
    let filtered = Object.values(this.props.positions);
    const filteredPositions = positionArr.filter(function (x, i) {
      if (filtered[i]) {
        return positionArr[i]
      }
    })
    console.log(`it fired: ${filteredPositions}`);
    this.filteredPlayers(filteredPositions);
  };
  
  filteredPlayers(filteredPositions){
    const filteredPlayers = this.props.data.filter( function(x,i, filteredPositions) {
      console.log(x.position);
      //how to filter all positions in an array
      (x.position !== filteredPositions[i])
    });
    console.log(filteredPlayers);
    return filteredPlayers
  }
  
  componentDidMount() {
    // this.filteredPositions(this.props.positons);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.positions !== this.props.positions || nextProps.data != this.props.data);
  }

  componentDidUpdate() {
    this.filteredPositions();
  }

  render() {

    const playerStats = this.props.data
    const playerList = []
    if (this.props.data.length !== 0) {
      for (let i = this.props.start; i <= this.props.end; i++) {
        // if (this.props.data[i].position === 'RB') {
        playerList.push(
          <tr key={this.props.data[i].id}>
            <td key={`${this.props.data[i].id}name`}>{this.props.data[i].name}</td>
            <td key={`${this.props.data[i].id}position`}>{this.props.data[i].position}</td>
            <td key={`${this.props.data[i].id}team`}>{this.props.data[i].team}</td>
            <td key={`${this.props.data[i].id}seasonPts`}>{this.props.data[i].seasonPts}</td>
            <td key={`${this.props.data[i].id}weekPts`}>{this.props.data[i].weekPts}</td>
            <td key={`${this.props.data[i].id}week`}>{this.props.data[i].week}</td>
            <td key={`${this.props.data[i].id}season`}>{this.props.data[i].season}</td>
          </tr>
        )
        // }
      }
    }

    return (
      <table key='playertable'>
        <thead>
          <tr key='columnNames'>
            <th key='name'>Name</th>
            <th key='position'>Positon</th>
            <th key='team'>Team</th>
            <th key='season-points'>Season Points</th>
            <th key='week-points'>Week Points</th>
            <th key='week'>Week</th>
            <th key='year'>Year</th>
          </tr>
        </thead>
        <tbody>
          {playerList}
        </tbody>
      </table>
    )
  }
}

export default PlayerStats;