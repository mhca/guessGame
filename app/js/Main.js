/**
 * Created by maida sanchez on 15/07/2015.
 */
var result = window.prompt("Nivel - Facil:2, Intermedio:4, Dificil:6")
var g = new Game(parseInt(result), parseInt(result));
g.createData();
g.displayData();
g.generateGuessNumber();
g.generateRandomPosition();
g.fillData();

var p = new Play(g.data);
p.play();
