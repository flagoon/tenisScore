class TennisGame {
    constructor() {
        this._scoreName = ['Love', 'Fifteen', 'Thirty', 'Forty'];
        this._winningBreakPoint = 4;
        this._pointsAdvantage = 2;
        this._winnerName = 'player';
    }

    get winnerName() {
        return this._winnerName;
    }

    get winningBreakPoint() {
        return this._winningBreakPoint;
    }

    get pointsAdvantage() {
        return this._pointsAdvantage;
    }

    get scoreName() {
        return this._scoreName;
    }

    winningMessage(player) {
        return `Win for ${player.winningPlayer}`;
    }

    advantageMessage(player) {
        return `Advantage ${player.winningPlayer}`;
    }

    tieResult(playerScore, scoreNames) {
        return playerScore > 3 ? 'Deuce' : `${scoreNames[playerScore]}-All`;
    }

    handleAdvantage(player) {
        if (player.score[0] >= this._winningBreakPoint
            || player.score[1] >= this._winningBreakPoint) {
            return Math.abs(player.score[0] - player.score[1]) >= this._pointsAdvantage
                ? this.winningMessage(player)
                : this.advantageMessage(player);
        }
        return `${this._scoreName[player.score[0]]}-${this._scoreName[player.score[1]]}`;
    }

}

module.exports = {
    TennisGame
};
