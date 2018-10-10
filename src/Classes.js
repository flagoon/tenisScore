class MatchResult {
    constructor(scoreOne, scoreTwo, gameType) {
        this.scoreOne = scoreOne;
        this.scoreTwo = scoreTwo;
    }
}

class GameType {
    constructor(gameName) {
        if (gameName === 'tenis') {
            this.scoreName = ['Love', 'Fifteen', 'Thirty', 'Forty'];
        }
    }

    getScoreNames() {
        return this.scoreName;
    }

}

module.exports = {
    MatchResult,
    GameType
};
