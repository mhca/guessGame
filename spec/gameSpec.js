var Game = require("./../app/nodejs/Game.js");

describe ('Game', function(){
    var game;
    beforeEach(function(){
        game = new Game(2,2);
        console.log(game);
    });

    afterEach(function(){
        game = null;
    });

    describe('Filling values to the Matrix', function(){
        it ('should add all data to the Matrix', function (){
            game.createData();
            var actualResults = true;
            for (var i = 0 ; i < game.data.length; i ++) {
                if (!actualResults) break;
                for (var j = 0 ; j < game.data[0].length;j++) {
                    if ( typeof game.data[i][j] == 'undefined') {
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
            game.createData();
            game.generateGuessNumber();
            game.generateRandomPosition();
            game.fillData();
            console.log(game.data);
            for (var i = 0 ; i < game.data.length; i ++) {
                for (var j = 0 ; j < game.data[0].length;j++) {
                    actualResults += game.data[i][j];
                }
            }
            var totalRandom = (game.data.length * game.data.length) /2;
            for (var i = 1 ; i <= totalRandom; i++) {
                expectedResults += i+i;
            }
            expect(actualResults).toBe(expectedResults);
        });
    });
});