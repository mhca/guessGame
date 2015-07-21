/**
 * Created by Heimy on 7/20/2015.
 */
var Game = require("./../app/nodejs/Game.js");
var Play = require("./../app/nodejs/Play.js");

describe('Play', function(){

    var guessGame;
    var play;

    beforeEach(function(){
        guessGame = new Game(2, 2);
        guessGame.createData();
        guessGame.generateGuessNumber();
        guessGame.generateRandomPosition();
        guessGame.fillData();
        play = new Play(guessGame.data);
    });

    it('should initialize properties', function(){
        expect(play.source).toEqual(guessGame.data);
        expect(play.dup_array).toEqual(play.source);
        expect(play.matches).toBe(0);
    });

    it('should hide all cells of the game', function(){
        play.fillHiddenValue();
        expect(play.dup_array).toEqual([['X', 'X'], ['X', 'X']]);
    });

    xit('should start the game', function(){
        // requires manual intervention from Player.
    });

    it('should display the cell values', function(){
        var expRes = '[' + play.dup_array[0][0] + ' ' + play.dup_array[0][1] + ']\n['
            + play.dup_array[1][0] + ' ' + play.dup_array[1][1] + ']\n';
        expect(play.showStatus()).toBe(expRes);
    });

    it('should check player\'s guess is a success', function(){
        play.source = [[1, 2], [2, 1]];
        var actRes = play.match(0, 0, 1, 1);
        var expRes = {
            isMatch : true,
            message : "Success"
        };
        expect(actRes).toEqual(expRes);
    });

    it('should check player\'s guess is a failure', function(){
        play.source = [[1, 2], [1, 2]];
        var actRes = play.match(0, 0, 1, 1);
        var expRes = {
            isMatch : false,
            message : "Fail"
        };
        expect(actRes).toEqual(expRes);
    });

    it('should check x1 and y1 are invalid coordinates', function(){
        play.source = [[-1, 2], [1, 2]];
        var actRes = play.match(0, 0, 1, 1);
        var expRes = {
            isMatch : false,
            message : "x1 and y1 are invalid coordinates"
        };
        expect(actRes).toEqual(expRes);
    });

    it('should check x2 and y2 are invalid coordinates', function(){
        play.source = [[1, 2], [1, -1]];
        var actRes = play.match(0, 0, 1, 1);
        var expRes = {
            isMatch : false,
            message : "x2 and y2 are invalid coordinates"
        };
        expect(actRes).toEqual(expRes);
    });

    it('should check if game is in progress', function(){
        expect(play.isFinishGame()).toBe(false);
    });

    it('should check if game is over', function(){
        play.matches = 2;
        expect(play.isFinishGame()).toBe(true);
    });

    xit('should get player\'s guess', function(){
        // requires manual intervention from Player.
    });
});

