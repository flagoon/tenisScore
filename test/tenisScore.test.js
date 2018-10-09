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
        assert.equal(tenisScore(0, 0), "Thirty-All", "test");
    });

    it("should correct score for 3-3", () => {
        assert.equal(tenisScore(1, 1), "Deuce", "test");
    });

    it("should correct score for 4-4", () => {
        assert.equal(tenisScore(0, 0), "Deuce", "test");
    });

    it("should correct score for 1-0", () => {
        assert.equal(tenisScore(1, 1), "Fifteen-Love", "test");
    });

    it("should correct score for 0-1", () => {
        assert.equal(tenisScore(0, 0), "Love-Fifteen", "test");
    });

    it("should correct score for 2-0", () => {
        assert.equal(tenisScore(1, 1), "Thirty-Love", "test");
    });

    it("should correct score for 0-2", () => {
        assert.equal(tenisScore(0, 0), "Love-Thirty", "test");
    });

    it("should correct score for 3-0", () => {
        assert.equal(tenisScore(1, 1), "Forty-Love", "test");
    });

    it("should correct score for 0-3", () => {
        assert.equal(tenisScore(0, 0), "Love-Forty", "test");
    });

    it("should correct score for 4-0", () => {
        assert.equal(tenisScore(1, 1), "Win for player1", "test");
    });

    it("should correct score for 0-4", () => {
        assert.equal(tenisScore(0, 0), "Win for player2", "test");
    });

    it("should correct score for 2-1", () => {
        assert.equal(tenisScore(1, 1), "Thirty-Fifteen", "test");
    });

    it("should correct score for 1-2", () => {
        assert.equal(tenisScore(0, 0), "Fifteen-Thirty", "test");
    });

    it("should correct score for 3-1", () => {
        assert.equal(tenisScore(1, 1), "Forty-Fifteen", "test");
    });

    it("should correct score for 1-3", () => {
        assert.equal(tenisScore(1, 1), "Fifteen-Forty", "test");
    });

    it("should correct score for 4-1", () => {
        assert.equal(tenisScore(0, 0), "Win for player1", "test");
    });

    it("should correct score for 1-4", () => {
        assert.equal(tenisScore(1, 1), "Win for player2", "test");
    });

    it("should correct score for 3-2", () => {
        assert.equal(tenisScore(1, 1), "Forty-Thirty", "test");
    });

    it("should correct score for 2-3", () => {
        assert.equal(tenisScore(0, 0), "Thirty-Forty", "test");
    });

    it("should correct score for 4-2", () => {
        assert.equal(tenisScore(1, 1), "Win for player1", "test");
    });

    it("should correct score for 2-4", () => {
        assert.equal(tenisScore(1, 1), "Win for player2", "test");
    });

    it("should correct score for 4-3", () => {
        assert.equal(tenisScore(1, 1), "Advantage player1", "test");
    });

    it("should correct score for 3-4", () => {
        assert.equal(tenisScore(0, 0), "Advantage player2", "test");
    });

    it("should correct score for 5-4", () => {
        assert.equal(tenisScore(1, 1), "Advantage player1", "test");
    });

    it("should correct score for 4-5", () => {
        assert.equal(tenisScore(0, 0), "Advantage player2", "test");
    });

    it("should correct score for 15-14", () => {
        assert.equal(tenisScore(1, 1), "Advantage player1", "test");
    });

    it("should correct score for 14-15", () => {
        assert.equal(tenisScore(0, 0), "Advantage player2", "test");
    });

    it("should correct score for 6-4", () => {
        assert.equal(tenisScore(1, 1), "Win for player1", "test");
    });

    it("should correct score for 4-6", () => {
        assert.equal(tenisScore(0, 0), "Win for player2", "test");
    });

    it("should correct score for 16-14", () => {
        assert.equal(tenisScore(1, 1), "Win for player1", "test");
    });

    it("should correct score for 14-16", () => {
        assert.equal(tenisScore(0, 0), "Win for player2", "test");
    });
});
