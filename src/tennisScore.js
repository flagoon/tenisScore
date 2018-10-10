const decideAdvantage = matchScore => {
    const diff = matchScore[1] - matchScore[2];
    if (diff > 0) {
        return 1;
    } else if (diff < 0) {
        return 2;
    } else {
        return 0;
    }
};

const tennisScore = (playerOneScore, playerTwoScore) => {
    const matchScore = {
        "1": playerOneScore,
        "2": playerTwoScore
    };

    const advantage = decideAdvantage(matchScore);

    const scoreNames = {
        "0": "Love",
        "1": "Fifteen",
        "2": "Thirty",
        "3": "Forty"
    };
    if (advantage === 0) {
        return playerOneScore > 3
            ? "Deuce"
            : `${scoreNames[playerOneScore]}-All`;
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        if (Math.abs(playerOneScore - playerTwoScore) >= 2) {
            if (playerOneScore > playerTwoScore) {
                return "Win for player1";
            } else {
                return "Win for player2";
            }
        } else if (Math.abs(playerOneScore - playerTwoScore) === 1) {
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
