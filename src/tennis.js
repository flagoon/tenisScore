const { MatchResult, GameType } = require('./Classes');

const gameType = new GameType('tennis');

const matchResult = new MatchResult(4,6, gameType);

console.log(matchResult.convertScore());

