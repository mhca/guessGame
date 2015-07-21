/**
 * Created by maida sanchez on 14/07/2015.
 */

var Game= function(columnLength, rowLength) {
    this.data = [];
    this.columns = columnLength;
    this.rows = rowLength;
    this.guessNumber = [];
};

Game.prototype.createData = function() {
    for(var row=0; row < this.rows; row++) {
        this.data[row] = new Array(this.rows);
        for (var column = 0; column < this.columns;column++) {
            this.data[row][column] = -1;
        }
    }
};

Game.prototype.displayData = function() {
    for(var row=0; row < this.rows; row++) {
        for (var column = 0; column < this.columns;column++) {
            //console.log(this.data[row][column]);
        }
    }
};

Game.prototype.generateRandomPosition = function() {
    var max = this.rows-1;
    var min = 0;
    var test = Math.floor(Math.random() * (max - min + 1)) + min;
    return test;
};

Game.prototype.generateGuessNumber = function() {
    var limit = (this.rows*this.rows)/2;
    for (var i=0; i< limit; i++) {
        this.guessNumber[i]= i+1;
        //console.log(this.guessNumber[i]);
    }
};

Game.prototype.isFilledValue = function(x,y) {
    return this.data[x][y] != -1;
};

Game.prototype.fillData = function(x,y) {
    var arv;
    for (var i = 0 ; i < this.guessNumber.length ; i++) {
        arv = 0;
        while (arv != 2) {
            var x = (this.generateRandomPosition() + this.generateRandomPosition() + this.rows) % this.rows;
            var y = this.generateRandomPosition();
            if (!this.isFilledValue(x,y)) {
                this.data[x][y]= this.guessNumber[i];
                arv++;
            }
        }
    }
};

module.exports = Game;