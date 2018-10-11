class FootballGame {
    constructor() {
        this._scoreName = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen'];
    }

    get scoreName() {
        return this._scoreName;
    }

    winningMessage(player) {
        return `${this._scoreName[player.score[0]]}-${this._scoreName[player.score[1]]}`;
    }

    tieResult(playerScore, scoreNames) {
        return `Tie ${scoreNames[playerScore]}-${scoreNames[playerScore]}`;
    }

    handleAdvantage(player) {
        return this.winningMessage(player);
    }
}

module.exports = {
    FootballGame
};
