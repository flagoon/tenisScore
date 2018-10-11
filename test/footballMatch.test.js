const assert = require('chai').assert;
const { MatchResult } = require('../src/MatchResult');
const { FootballGame } = require('../src/GameTypes/FootballGame');

describe('Football score', () => {

    let gameType;

    beforeEach(() => {
        gameType = new FootballGame();
    });

    it('should correct score for 0-0', () => {
        const matchResult = new MatchResult(0, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Tie Zero-Zero', 'test');
    });

    it('should correct score for 1-1', () => {
        const matchResult = new MatchResult(1, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Tie One-One', 'test');
    });

    it('should correct score for 2-2', () => {
        const matchResult = new MatchResult(2, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Tie Two-Two', 'test');
    });

    it('should correct score for 3-3', () => {
        const matchResult = new MatchResult(3, 3, gameType);
        assert.equal(matchResult.convertScore(), 'Tie Three-Three', 'test');
    });

    it('should correct score for 1-0', () => {
        const matchResult = new MatchResult(1, 0, gameType);
        assert.equal(matchResult.convertScore(), 'One-Zero', 'test');
    });

    it('should correct score for 0-1', () => {
        const matchResult = new MatchResult(0, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Zero-One', 'test');
    });

    it('should correct score for 2-0', () => {
        const matchResult = new MatchResult(2, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Two-Zero', 'test');
    });

    it('should correct score for 0-2', () => {
        const matchResult = new MatchResult(0, 2, gameType);
        assert.equal(matchResult.convertScore(), 'Zero-Two', 'test');
    });

    it('should correct score for 3-0', () => {
        const matchResult = new MatchResult(11, 0, gameType);
        assert.equal(matchResult.convertScore(), 'Eleven-Zero', 'test');
    });

    it('should correct score for 0-11', () => {
        const matchResult = new MatchResult(0, 11, gameType);
        assert.equal(matchResult.convertScore(), 'Zero-Eleven', 'test');
    });

    it('should correct score for 2-1', () => {
        const matchResult = new MatchResult(2, 1, gameType);
        assert.equal(matchResult.convertScore(), 'Two-One', 'test');
    });

    it('should correct score for 1-2', () => {
        const matchResult = new MatchResult(1, 2, gameType);
        assert.equal(matchResult.convertScore(), 'One-Two', 'test');
    });

    it('should correct score for 8-4', () => {
        const matchResult = new MatchResult(8, 4, gameType);
        assert.equal(matchResult.convertScore(), 'Eight-Four', 'test');
    });

    it('should correct score for 14-10', () => {
        const matchResult = new MatchResult(14, 10, gameType);
        assert.equal(matchResult.convertScore(), 'Fourteen-Ten', 'test');
    });

    it('should correct score for 1-14', () => {
        const matchResult = new MatchResult(1, 14, gameType);
        assert.equal(matchResult.convertScore(), 'One-Fourteen', 'test');
    });

    it('should correct score for 13-13', () => {
        const matchResult = new MatchResult(13, 13, gameType);
        assert.equal(matchResult.convertScore(), 'Tie Thirteen-Thirteen', 'test');
    });
});
