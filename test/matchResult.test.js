const assert = require('chai').assert;
const { MatchResult } = require('../src/MatchResult');
const { TennisGame } = require('../src/GameTypes/TennisGame');

describe('Tenis score', () => {

    let gameType;

    beforeEach(() => {
        gameType = new TennisGame();
    });

    it('should correct score for 0-0', () => {
        const matchResult = new MatchResult(0, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Love-All', 'test');
    });

    it('should correct score for 1-1', () => {
        const matchResult = new MatchResult(1, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Fifteen-All', 'test');
    });

    it('should correct score for 2-2', () => {
        const matchResult = new MatchResult(2, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Thirty-All', 'test');
    });

    it('should correct score for 3-3', () => {
        const matchResult = new MatchResult(3, 3, gameType);
        assert.equal(matchResult.convertScore(), 'Forty-All', 'test');
    });

    it('should correct score for 4-4', () => {
        const matchResult = new MatchResult(4, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Deuce', 'test');
    });

    it('should correct score for 1-0', () => {
        const matchResult = new MatchResult(1, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Fifteen-Love', 'test');
    });

    it('should correct score for 0-1', () => {
        const matchResult = new MatchResult(0, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Love-Fifteen', 'test');
    });

    it('should correct score for 2-0', () => {
        const matchResult = new MatchResult(2, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Thirty-Love', 'test');
    });

    it('should correct score for 0-2', () => {
        const matchResult = new MatchResult(0, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Love-Thirty', 'test');
    });

    it('should correct score for 3-0', () => {
        const matchResult = new MatchResult(3, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Forty-Love', 'test');
    });

    it('should correct score for 0-3', () => {
        const matchResult = new MatchResult(0, 3, gameType);
        assert.equal(matchResult.convertScore(), 'Love-Forty', 'test');
    });

    it('should correct score for 4-0', () => {
        const matchResult = new MatchResult(4, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player1', 'test');
    });

    it('should correct score for 0-4', () => {
        const matchResult = new MatchResult(0, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player2', 'test');
    });

    it('should correct score for 2-1', () => {
        const matchResult = new MatchResult(2, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Thirty-Fifteen', 'test');
    });

    it('should correct score for 1-2', () => {
        const matchResult = new MatchResult(1, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Fifteen-Thirty', 'test');
    });

    it('should correct score for 3-1', () => {
        const matchResult = new MatchResult(3, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Forty-Fifteen', 'test');
    });

    it('should correct score for 1-3', () => {
        const matchResult = new MatchResult(1, 3, gameType);
        assert.equal(matchResult.convertScore(), 'Fifteen-Forty', 'test');
    });

    it('should correct score for 4-1', () => {
        const matchResult = new MatchResult(4, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player1', 'test');
    });

    it('should correct score for 1-4', () => {
        const matchResult = new MatchResult(1, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player2', 'test');
    });

    it('should correct score for 3-2', () => {
        const matchResult = new MatchResult(3, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Forty-Thirty', 'test');
    });

    it('should correct score for 2-3', () => {
        const matchResult = new MatchResult(2, 3, gameType);
        assert.equal(matchResult.convertScore(), 'Thirty-Forty', 'test');
    });

    it('should correct score for 4-2', () => {
        const matchResult = new MatchResult(4, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player1', 'test');
    });

    it('should correct score for 2-4', () => {
        const matchResult = new MatchResult(2, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player2', 'test');
    });

    it('should correct score for 4-3', () => {
        const matchResult = new MatchResult(4, 3, gameType);
        assert.equal(matchResult.convertScore(), 'Advantage player1', 'test');
    });

    it('should correct score for 3-4', () => {
        const matchResult = new MatchResult(3, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Advantage player2', 'test');
    });

    it('should correct score for 5-4', () => {
        const matchResult = new MatchResult(5, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Advantage player1', 'test');
    });

    it('should correct score for 4-5', () => {
        const matchResult = new MatchResult(4, 5, gameType);
        assert.equal(matchResult.convertScore(), 'Advantage player2', 'test');
    });

    it('should correct score for 15-14', () => {
        const matchResult = new MatchResult(15, 14, gameType);
        assert.equal(matchResult.convertScore(), 'Advantage player1', 'test');
    });

    it('should correct score for 14-15', () => {
        const matchResult = new MatchResult(14, 15, gameType);
        assert.equal(matchResult.convertScore(), 'Advantage player2', 'test');
    });

    it('should correct score for 6-4', () => {
        const matchResult = new MatchResult(6, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player1', 'test');
    });

    it('should correct score for 4-6', () => {
        const matchResult = new MatchResult(4, 6, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player2', 'test');
    });

    it('should correct score for 16-14', () => {
        const matchResult = new MatchResult(16, 14, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player1', 'test');
    });

    it('should correct score for 14-16', () => {
        const matchResult = new MatchResult(14, 16, gameType);
        assert.equal(matchResult.convertScore(), 'Win for player2', 'test');
    });
});
