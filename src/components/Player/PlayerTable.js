import React from 'react';
import axios from 'axios';
import PlayerStats from './PlayerStats';
import PlayerControl from '../Controls/PlayerControl';
import YrWkControl from '../Controls/YrWkControl';
// import playerData from '../../model/playerData'

class PlayerTable extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      start: 0,
      end: 49,
      year: 2017,
      week: 1,
      positions: {
        QB: true,
        RB: true,
        WR: true,
        TE: true,
        K: true,
        DEF: true,
        LB: false,
        DB: false,
        DL: false,
      },
      showPosition: 'all',
      showAllPlayers: false,
    };
  };

  fetchNflData() {
    const allPlayers = []
    const nflApiUrlSeason = `http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=${this.state.year}&week=${this.state.week}&format=json`;
    fetch(nflApiUrlSeason)
      .then((resp) => resp.json())
      .then((data) => {
        data.players.forEach((x) => {
          if (x.position !== 'DB' && x.position !== 'DL' && x.position !== 'LB') {
            const plyr = {};
            plyr.id = x.id;
            plyr.name = x.name;
            plyr.position = x.position;
            plyr.team = x.teamAbbr;
            plyr.seasonPts = x.seasonPts;
            plyr.weekPts = x.weekPts;
            plyr.season = this.state.year;
            plyr.week = this.state.week;
            plyr.yrWkId = this.state.year + '' + this.state.week + '' + x.id;
            allPlayers.push(plyr);
          }
        })
        this.setState({
          players: allPlayers
        });
      })
  }

  componentDidMount() {
    this.fetchNflData()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.week !== this.state.week || nextProps.year !== this.state.year || nextProps.end !== this.state.end);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('comp did update');
  }

  nextPg() {
    if (this.state.end < this.state.players.length - 1) {
      this.setState({
        start: this.state.start + 50,
        end: (this.state.end + 50 > this.state.players.length - 1 ? this.state.players.length - 1 : this.state.end + 50)
      });
    }
  };

  prevPg() {
    if (this.state.start > 0) {
      this.setState({
        start: this.state.start - 50,
        end: this.state.end - 50,
      });
    }
  };

  showAllPlayers() {
    if (this.state.showAllPlayers === false) {
      this.setState({
        start: 0,
        end: this.state.players.length - 1,
        showAllPlayers: true,
      })
    } else {
      this.setState({
        start: 0,
        end: 49,
        showAllPlayers: false,
      })
    }
  }

  filterTable(pos) {
    switch (pos) {
      case 'QB':
        (this.state.positions.QB === true) ? this.setState({ positions: { ...this.state.positions, QB: false } }) : this.setState({ positions: { ...this.state.positions, QB: true } });
        (this.state.showPosition !== 'QB') ? this.setState({ showPosition: 'QB', showAllPlayers: true, end: this.state.players.length - 1}) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'RB':
        (this.state.positions.RB === true) ? this.setState({ positions: { ...this.state.positions, RB: false } }) : this.setState({ positions: { ...this.state.positions, RB: true } });
        (this.state.showPosition !== 'RB') ? this.setState({ showPosition: 'RB', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'WR':
        (this.state.positions.WR === true) ? this.setState({ positions: { ...this.state.positions, WR: false } }) : this.setState({ positions: { ...this.state.positions, WR: true } });
        (this.state.showPosition !== 'WR') ? this.setState({ showPosition: 'WR', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'TE':
        (this.state.positions.TE === true) ? this.setState({ positions: { ...this.state.positions, TE: false } }) : this.setState({ positions: { ...this.state.positions, TE: true } });
        (this.state.showPosition !== 'TE') ? this.setState({ showPosition: 'TE', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'K':
        (this.state.positions.K === true) ? this.setState({ positions: { ...this.state.positions, K: false } }) : this.setState({ positions: { ...this.state.positions, K: true } });
        (this.state.showPosition !== 'K') ? this.setState({ showPosition: 'K', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'DEF':
        (this.state.positions.DEF === true) ? this.setState({ positions: { ...this.state.positions, DEF: false } }) : this.setState({ positions: { ...this.state.positions, DEF: true } });
        (this.state.showPosition !== 'DEF') ? this.setState({ showPosition: 'DEF', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'LB':
        (this.state.positions.LB === true) ? this.setState({ positions: { ...this.state.positions, LB: false } }) : this.setState({ positions: { ...this.state.positions, LB: true } });
        (this.state.showPosition !== 'LB') ? this.setState({ showPosition: 'LB', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'DB':
        (this.state.positions.DB === true) ? this.setState({ positions: { ...this.state.positions, DB: false } }) : this.setState({ positions: { ...this.state.positions, DB: true } });
        (this.state.showPosition !== 'DB') ? this.setState({ showPosition: 'DB', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
    switch (pos) {
      case 'DL':
        (this.state.positions.DL === true) ? this.setState({ positions: { ...this.state.positions, DL: false } }) : this.setState({ positions: { ...this.state.positions, DL: true } });
        (this.state.showPosition !== 'DL') ? this.setState({ showPosition: 'DL', showAllPlayers: true, end: this.state.players.length - 1, }) : this.setState(() => null);
        break;
    }
  }

  setYear(year) {
    console.log('setting year');
    console.log(year.target.value);
    this.setState({ year: year.target.value });
    this.fetchNflData();
  }

  setWeek(week) {
    console.log('setting week');
    console.log(week.target.value);
    this.setState({ week: week.target.value });
    this.fetchNflData();
  }

  render() {

    if (this.state.players.length < 1) return <div>Loading</div>;

    return (
      <div>
        <div>Fantasy Football Dashboard</div>
        <div>
          <button onClick={() => this.showAllPlayers()}>Show All</button>
        </div>
        <div>
          <YrWkControl setYear={(year) => this.setYear(year)} setWeek={(week) => this.setWeek(week)} season={this.state.season} />
        </div>
        <div>
          <PlayerControl filterTable={(pos) => this.filterTable(pos)} />
        </div>
        <br />
        <PlayerStats positions={this.state.positions} data={this.state.players} start={this.state.start} end={this.state.end} showPosition={this.state.showPosition} />
        <br />
        <button onClick={() => this.prevPg()}>Prev</button>
        <button onClick={() => this.nextPg()}>Next</button>
      </div>

    );
  }
}

export default PlayerTable;
