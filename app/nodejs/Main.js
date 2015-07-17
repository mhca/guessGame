/**
 * Created by maida sanchez on 15/07/2015.
 */
var readlineSync = require('readline-sync');
var game = require('./Game.js');
var play = require('./Play.js');

var result = readlineSync.question("Nivel - Facil:2, Intermedio:4, Dificil:6: ")
var g = new game(parseInt(result), parseInt(result));
g.createData();
g.displayData();
g.generateGuessNumber();
g.generateRandomPosition();
g.fillData();

var p = new play(g.data);
p.play();
