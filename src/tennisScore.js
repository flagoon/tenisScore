const decideWinningPlayer = (scoreOne, scoreTwo) => {
    const diff = scoreOne - scoreTwo;
    if (diff > 0) {
        return "player1";
    } else if (diff < 0) {
        return "player2";
    } else {
        return "none";
    }
};

const winningMessage = player => `Win for ${player}`;
const advantageMessage = player => `Advantage ${player}`;
const decideTieType = (playerScore, scoreNames) => {
    return playerScore > 3 ? "Deuce" : `${scoreNames[playerScore]}-All`;
};

const tennisScore = (playerOneScore, playerTwoScore) => {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

    const playerInAdvantage = decideWinningPlayer(
        playerOneScore,
        playerTwoScore
    );

    if (playerInAdvantage === "none") {
        return decideTieType(playerOneScore, scoreNames);
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        return Math.abs(playerOneScore - playerTwoScore) >= 2
            ? winningMessage(playerInAdvantage)
            : advantageMessage(playerInAdvantage);
    } else {
        return `${scoreNames[playerOneScore]}-${scoreNames[playerTwoScore]}`;
    }
};

module.exports = {
    tennisScore
};
