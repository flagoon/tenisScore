const tenisScore = (playerOneScore, playerTwoScore) => {
    if (playerOneScore === playerTwoScore) {
        switch (playerOneScore) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            case 3:
                return "Deuce";
        }
    }
};

module.exports = {
    tenisScore
};
