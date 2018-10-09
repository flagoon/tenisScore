const assert = require("chai").assert;
const tenisScore = require("../src/tenisScore").tenisScore;

describe("Tenis score", () => {
    it("should correct score for 0-0", () => {
        assert.equal(tenisScore(0, 0), "Love-All", "test");
    });

    it("should correct score for 1-1", () => {
        assert.equal(tenisScore(1, 1), "Fifteen-All", "test");
    });

    it("should correct score for 2-2", () => {
        assert.equal(tenisScore(2, 2), "Thirty-All", "test");
    });

    it("should correct score for 3-3", () => {
        assert.equal(tenisScore(3, 3), "Deuce", "test");
    });

    it("should correct score for 4-4", () => {
        assert.equal(tenisScore(4, 4), "Deuce", "test");
    });

    it("should correct score for 1-0", () => {
        assert.equal(tenisScore(1, 0), "Fifteen-Love", "test");
    });

    it("should correct score for 0-1", () => {
        assert.equal(tenisScore(0, 1), "Love-Fifteen", "test");
    });

    it("should correct score for 2-0", () => {
        assert.equal(tenisScore(2, 0), "Thirty-Love", "test");
    });

    it("should correct score for 0-2", () => {
        assert.equal(tenisScore(0, 2), "Love-Thirty", "test");
    });

    it("should correct score for 3-0", () => {
        assert.equal(tenisScore(3, 0), "Forty-Love", "test");
    });

    it("should correct score for 0-3", () => {
        assert.equal(tenisScore(0, 3), "Love-Forty", "test");
    });

    it("should correct score for 4-0", () => {
        assert.equal(tenisScore(4, 0), "Win for player1", "test");
    });

    it("should correct score for 0-4", () => {
        assert.equal(tenisScore(0, 4), "Win for player2", "test");
    });

    it("should correct score for 2-1", () => {
        assert.equal(tenisScore(2, 1), "Thirty-Fifteen", "test");
    });

    it("should correct score for 1-2", () => {
        assert.equal(tenisScore(1, 2), "Fifteen-Thirty", "test");
    });

    it("should correct score for 3-1", () => {
        assert.equal(tenisScore(3, 1), "Forty-Fifteen", "test");
    });

    it("should correct score for 1-3", () => {
        assert.equal(tenisScore(1, 3), "Fifteen-Forty", "test");
    });

    it("should correct score for 4-1", () => {
        assert.equal(tenisScore(4, 1), "Win for player1", "test");
    });

    it("should correct score for 1-4", () => {
        assert.equal(tenisScore(1, 4), "Win for player2", "test");
    });

    it("should correct score for 3-2", () => {
        assert.equal(tenisScore(3, 2), "Forty-Thirty", "test");
    });

    it("should correct score for 2-3", () => {
        assert.equal(tenisScore(2, 3), "Thirty-Forty", "test");
    });

    it("should correct score for 4-2", () => {
        assert.equal(tenisScore(4, 2), "Win for player1", "test");
    });

    it("should correct score for 2-4", () => {
        assert.equal(tenisScore(2, 4), "Win for player2", "test");
    });

    it("should correct score for 4-3", () => {
        assert.equal(tenisScore(4, 3), "Advantage player1", "test");
    });

    it("should correct score for 3-4", () => {
        assert.equal(tenisScore(3, 4), "Advantage player2", "test");
    });

    it("should correct score for 5-4", () => {
        assert.equal(tenisScore(5, 4), "Advantage player1", "test");
    });

    it("should correct score for 4-5", () => {
        assert.equal(tenisScore(4, 5), "Advantage player2", "test");
    });

    it("should correct score for 15-14", () => {
        assert.equal(tenisScore(15, 14), "Advantage player1", "test");
    });

    it("should correct score for 14-15", () => {
        assert.equal(tenisScore(14, 15), "Advantage player2", "test");
    });

    it("should correct score for 6-4", () => {
        assert.equal(tenisScore(6, 4), "Win for player1", "test");
    });

    it("should correct score for 4-6", () => {
        assert.equal(tenisScore(4, 6), "Win for player2", "test");
    });

    it("should correct score for 16-14", () => {
        assert.equal(tenisScore(16, 14), "Win for player1", "test");
    });

    it("should correct score for 14-16", () => {
        assert.equal(tenisScore(14, 16), "Win for player2", "test");
    });
});
