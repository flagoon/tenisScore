class MatchResult {
    constructor(scoreOne, scoreTwo, gameType) {
        this.scoreOne = scoreOne;
        this.scoreTwo = scoreTwo;
        this.gameType = gameType;
    }

    decideWinningPlayer() {
        const scoreDifference = this.scoreOne - this.scoreTwo;
        if (scoreDifference > 0) {
            return { winningPlayer: `${this.gameType.winnerName}1`, score: [this.scoreOne, this.scoreTwo] };
        } else if (scoreDifference < 0) {
            return { winningPlayer: `${this.gameType.winnerName}2`, score: [this.scoreOne, this.scoreTwo] };
        }
        return 'none';
    }

    convertScore() {
        const playerInAdvance = this.decideWinningPlayer();
        if (playerInAdvance === 'none') {
            return this.gameType.tieResult(this.scoreOne, this.gameType.scoreName);
        }
        return this.gameType.handleAdvantage(playerInAdvance);
    }
}


module.exports = {
    MatchResult
};
