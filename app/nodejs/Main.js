/**
 * Created by maida sanchez on 15/07/2015.
 */

var readlineSync = require('readline-sync');
var game = require('./Game.js');
var play = require('./Play.js');
var result = readlineSync.question("LEVEL - Easy:2, Intermediate:4, Hard:6  ");

if (result == 'undefined') {
    results = 2;
}

var g = new game(parseInt(result), parseInt(result));
g.createData();
g.displayData();
g.generateGuessNumber();
g.generateRandomPosition();
g.fillData();

var p = new play(g.data);
p.play();