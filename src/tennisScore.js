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

const tennisScore = (playerOneScore, playerTwoScore) => {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

    const playerInAdvantage = decideWinningPlayer(
        playerOneScore,
        playerTwoScore
    );

    if (playerInAdvantage === "none") {
        return playerOneScore > 3
            ? "Deuce"
            : `${scoreNames[playerOneScore]}-All`;
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        return Math.abs(playerOneScore - playerTwoScore) >= 2
            ? `Win for ${playerInAdvantage}`
            : `Advantage ${playerInAdvantage}`;
    } else {
        return `${scoreNames[playerOneScore]}-${scoreNames[playerTwoScore]}`;
    }
};

module.exports = {
    tennisScore
};
