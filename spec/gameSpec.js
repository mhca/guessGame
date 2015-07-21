var Game = require("./../app/nodejs/Game.js");

describe ('Game', function(){

    var guessGame;

    beforeEach(function(){

        guessGame = new Game(2,2);
        console.log(guessGame);
    });

    afterEach(function(){

        guessGame = null;
    });

    describe('Create', function(){
        it ('should add all data to the Matrix', function (){
            guessGame.createData();
            var actualResults = true;
            for (var i = 0 ; i < guessGame.data.length; i ++) {
                if (!actualResults) break;
                for (var j = 0 ; j < guessGame.data[0].length;j++) {
                    if ( typeof guessGame.data[i][j] == 'undefined') {
                        actualResults = false;
                    }
                }
            }

            var expectedResults = true;
            expect(actualResults).toBe(expectedResults);
        });

        it ('should generate matrix', function (){

            var actualResults = 0;
            var expectedResults = 0;
            guessGame.createData();
            guessGame.generateGuessNumber();
            guessGame.generateRandomPosition();
            guessGame.fillData();

            for (var i = 0 ; i < guessGame.data.length; i ++) {

                for (var j = 0 ; j < guessGame.data[0].length;j++) {
                    actualResults += guessGame.data[i][j];
                }
            }
            var totalRandom = (guessGame.data.length * guessGame.data.length) /2;
            for (var i = 1 ; i <= totalRandom; i++) {
                expectedResults += i+i;
            }

            expect(actualResults).toBe(expectedResults);
        });

        it ('should add all data to the Matrix', function (){
            guessGame.createData();
            var actualResults = true;
            for (var i = 0 ; i < guessGame.data.length; i ++) {
                if (!actualResults) break;
                for (var j = 0 ; j < guessGame.data[0].length;j++) {
                    if ( typeof guessGame.data[i][j] == 'undefined') {
                        actualResults = false;
                    }
                }
            }

            var expectedResults = true;
            expect(actualResults).toBe(expectedResults);
        });
    });

    describe('New guessGame', function(){

        var guessGame;

        beforeEach(function(){

            guessGame = new Game(2, 2);
        });

        it('should initialize data', function(){
            expect(guessGame.data).toEqual([]);
        });

        it('should initialize columns', function(){
            expect(guessGame.columns).toBe(2);
        });

        it('should initialize rows', function(){

            expect(guessGame.rows).toBe(2);
        });

        it('should initialize guessNumber', function(){

            expect(guessGame.guessNumber).toEqual([]);
        });
    });

    it('should create default data as -1', function(){
        guessGame.createData();
        expect(guessGame.data).toEqual([[-1, -1],[-1, -1]]);
    });

    it('should generate random position', function(){
        var randomPosition = guessGame.generateRandomPosition();
        expect(randomPosition).toBeGreaterThan(-1);
        expect(randomPosition).toMatch(/^[0-1]$/);
    });

    it('should generate guess number', function(){
        guessGame.generateGuessNumber();
        expect(guessGame.guessNumber).toEqual([1, 2]);
    });

    it('should check if cell is filled', function(){
        guessGame.createData();
        expect(guessGame.isFilledValue(1, 1)).toBe(false);
    });

    it('should place all guess numbers', function(){
        guessGame.createData();
        guessGame.generateGuessNumber();
        guessGame.fillData();
        expect(guessGame.data[0][0]).toMatch(/^[1-2]$/);
    });
});