const decideWinningPlayer = (scoreOne, scoreTwo) => {
    const diff = scoreOne - scoreTwo;
    if (diff > 0) {
        return 1;
    } else if (diff < 0) {
        return 2;
    } else {
        return 0;
    }
};

const tennisScore = (playerOneScore, playerTwoScore) => {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

    const winner = decideWinningPlayer(playerOneScore, playerTwoScore);

    if (winner === 0) {
        return playerOneScore > 3
            ? "Deuce"
            : `${scoreNames[playerOneScore]}-All`;
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        return Math.abs(playerOneScore - playerTwoScore) >= 2
            ? `Win for player${winner}`
            : `Advantage player${winner}`;
    } else {
        return `${scoreNames[playerOneScore]}-${scoreNames[playerTwoScore]}`;
    }
};

module.exports = {
    tennisScore
};
