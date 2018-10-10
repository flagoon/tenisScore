class TennisGame {
    get winningBreakPoint() {
        return this._winningBreakPoint;
    }

    get pointsAdvantage() {
        return this._pointsAdvantage;
    }

    constructor() {
        this._scoreName = ['Love', 'Fifteen', 'Thirty', 'Forty'];
        this._winningBreakPoint = 4;
        this._pointsAdvantage = 2;
    }

    get scoreName() {
        return this._scoreName;
    }

}

module.exports = {
    TennisGame
};
