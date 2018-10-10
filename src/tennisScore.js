const decideAdvantage = (scoreOne, scoreTwo) => {
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
    const scoreNames = {
        "0": "Love",
        "1": "Fifteen",
        "2": "Thirty",
        "3": "Forty"
    };

    const absoluteDifference = Math.abs(playerOneScore - playerTwoScore);

    const advantage = decideAdvantage(playerOneScore, playerTwoScore);

    if (advantage === 0) {
        return playerOneScore > 3
            ? "Deuce"
            : `${scoreNames[playerOneScore]}-All`;
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        if (absoluteDifference >= 2) {
            if (playerOneScore > playerTwoScore) {
                return "Win for player1";
            } else {
                return "Win for player2";
            }
        } else if (absoluteDifference === 1) {
            if (playerOneScore > playerTwoScore) {
                return "Advantage player1";
            } else {
                return "Advantage player2";
            }
        }
    } else {
        return `${scoreNames[playerOneScore]}-${scoreNames[playerTwoScore]}`;
    }
};

module.exports = {
    tennisScore
};
