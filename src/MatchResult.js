class MatchResult {
    constructor(scoreOne, scoreTwo, gameType) {
        this.scoreOne = scoreOne;
        this.scoreTwo = scoreTwo;
        this.gameType = gameType;
    }

    decideWinningPlayer() {
        const scoreDifference = this.scoreOne - this.scoreTwo;
        if (scoreDifference > 0) {
            return {winningPlayer: 'player1'};
        } else if (scoreDifference < 0)
        {
            return {winningPlayer: 'player2'};
        }
        return 'none';
    }

    static winningMessage(player) {
        return `Win for ${player.winningPlayer}`;
    }

    static advantageMessage(player) {
        return `Advantage ${player.winningPlayer}`;
    }

    static decideTieType(playerScore, scoreNames) {
        return playerScore > 3 ? 'Deuce' : `${scoreNames[playerScore]}-All`;
    }

    convertScore() {
        const playerInAdvance = this.decideWinningPlayer();
        if (playerInAdvance === 'none') {
            return MatchResult.decideTieType(this.scoreOne, this.gameType.scoreName);
        } else if (this.scoreOne >= this.gameType.winningBreakPoint
            || this.scoreTwo >= this.gameType.winningBreakPoint) {
            return Math.abs(this.scoreOne - this.scoreTwo) >= this.gameType.pointsAdvantage
                ? MatchResult.winningMessage(playerInAdvance)
                : MatchResult.advantageMessage(playerInAdvance);
        }
        return `${this.gameType.scoreName[this.scoreOne]}-${this.gameType.scoreName[this.scoreTwo]}`;
    }
}


module.exports = {
    MatchResult
};
