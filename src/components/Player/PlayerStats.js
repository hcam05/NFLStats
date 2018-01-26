import React from 'react';

class PlayerStats extends React.Component {

  componentDidMount() {
    // this.createPlayers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.positions !== this.props.positions || nextProps.data != this.props.data || nextProps.end !== this.props.end);
  }

  componentDidUpdate() {
    // this.filteredPositions();
  }
  
  render() {

    // SORT PLAYERS BY TOTAL WEEK POINTS //
    this.props.data.sort((x,y) => y.weekPts - x.weekPts);

    const playerList = []
    if (this.props.data.length !== 0 && this.props.showPosition === 'all') {
      for (let i = this.props.start; i <= this.props.end; i++) {
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
      }
    } else {
      for (let i = this.props.start; i <= this.props.end; i++) {
        if (this.props.data[i].position === this.props.showPosition) {
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
        }
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