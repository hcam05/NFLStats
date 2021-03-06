'use strict';
const isofetch = require('isomorphic-fetch');

const playerData = (year, week) => {
  const allPlayers = []
  const nflApiUrlSeason = `http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=${year}&week=${week}&format=json`;
  console.log(`getting data ${nflApiUrlSeason}`);
  fetch(nflApiUrlSeason)
    .then((resp) => resp.json())
    .then((data) => {
      data.players.forEach((x) => {
        const plyr = {};
        plyr.id = x.id;
        plyr.name = x.name;
        plyr.position = x.position;
        plyr.team = x.teamAbbr;
        plyr.seasonPts = x.seasonPts;
        plyr.weekPts = x.weekPts;
        plyr.season = year;
        plyr.week = week;
        plyr.yrWkId = year + '' + week + '' + x.id;
        allPlayers.push(plyr);
      })
      console.log(`length: ${allPlayers.length}`)
      return allPlayers;
    })
}

module.exports = playerData;
