/**
 * Created by maida sanchez on 15/07/2015.
 */

var readSyncLine = require('readline-sync');

var Play = function(data) {
    this.source = data;
    this.dup_array = JSON.parse(JSON.stringify(this.source));
    this.matches = 0;
};

Play.prototype.fillHiddenValue = function() {
    var me = this;
    me.dup_array.forEach(function(currentValueX,i ) {
        me.dup_array[i].forEach(function(currentValueY,j){
            me.dup_array[i][j]='X';
        });
    });
};

Play.prototype.play = function() {
    this.fillHiddenValue();
    while(!this.isFinishGame()){
        var read = this.readLines();
        var result = this.match(read[0],read[1],read[2],read[3]);
        if (result.isMatch){
            this.matches++;
            this.dup_array[read[0]][read[1]] = this.source[read[0]][read[1]];
            this.dup_array[read[2]][read[3]] = this.source[read[2]][read[3]];
            this.source[read[0]][read[1]] = -1;
            this.source[read[2]][read[3]] = -1;
            console.log(result.message +'\n'+ this.showStatus());
        }
        else {
            console.log(result.message + '\n'+ this.showStatus());
        }
    }
    if (this.isFinishGame()) {
        console.log("You win the game");
    }
};

Play.prototype.showStatus = function() {
    var showMatrix='';
    for (var i = 0 ; i < this.dup_array.length ; i++) {
        var matrixEntireRow = '[';
        for(var j = 0 ; j < this.dup_array[0].length ; j++) {
            if (j +1 == this.dup_array[0].length) {
                matrixEntireRow += this.dup_array[i][j] +  ']';
            } else {
                matrixEntireRow += this.dup_array[i][j] + ' ';
            }
        }
        showMatrix+= matrixEntireRow + '\n';
    }
    return showMatrix;
};

Play.prototype.match = function(x1, y1, x2, y2){
    var result={}, validate;
    if ( this.source[x1][y1] != -1 && this.source[x2][y2] != -1) {
        validate = this.source[x1][y1] == this.source [x2][y2];
        result = {
            isMatch : validate,
            message : validate?"Success":"Fail"
        }
    }
    else if (this.source[x1][y1] == -1)
    {
        result = {
            isMatch : false,
            message : "x1 and y1 are invalid coordinates"
        }
    }
    else {
        result = {
            isMatch : false,
            message : "x2 and y2 are invalid coordinates"
        }
    }
    return result;
};

Play.prototype.isFinishGame = function(){
    return this.matches == (this.source.length * this.source.length)/2;
};

Play.prototype.readLines = function() {
    return readSyncLine.question("Ingresar valor de coordenadas x1,y1,x2,y2: ").split(',').map(Number);
};

module.exports= Play;