var clickPosition = null;
var clickPositionArray = [];

$(document).ready(function(){
    $('#game-area').on('click', '.game-cell', function(){
        cell_click($(this));
    });
});

//  Begin cell_click function
function cell_click(selector){
    var clickPosition = inputInterpreter(selector);
    var displayObject = logicController.click(clickPosition);
    displayController(displayObject);
}
//  Close cell_click function



//  Begin inputInterpreter
function inputInterpreter(selector) {

}
//  Close inputInterpreter



//  Begin logicController
var logicController = {
    counter: 0,
    players: 'x',
    displayArray:[],
    playerArray:[],
    imgArray:[],
    statArray:[],

    click: function(array){
        if (clickPosition != null){
            this.displayLogic();
        }else{
            this.playerInfo();
            this.boardTiles();
            this.turnCounter();
            this.switchPlayer();
            this.displayLogic();
        }
    },

    PlayerObject: function(number,symbol,turn){
        this.number = number;
        this.symbol = symbol;
        this.turn = turn;
    },

    playerInfo: function(array) {
        var result = new this.PlayerObject(array[0],array[1],array[2]);
        var tileSymbol = array[1];
        this.playerArray.push(result);
        this.displayArray.push(this.playerArray);
    },

    boardTiles: function(tileSymbol){
        this.imgArray.push(tileSymbol);
        this.displayArray.push(this.imgArray);
    },

    turnCounter: function() {
        var countArray = [];
        this.counter++;//increment turn counter
        countArray = this.counter;
        this.playerArray.push(countArray)
        },

    switchPlayer: function() {
        var whosTurn = [];
        if (this.players == 'x'){
            this.players = 'o';
        }else {
            this.players = 'x';
        }
        whosTurn = this.players;
        this.playerArray.push(whosTurn);
        },

    displayLogic: function(){
        return this.displayArray.slice();

    }



};








//function logicController(clickPosition) {
//
//}
////@purpose: keep track of the number of turns taken
////@params:
//    //clickPosition: the symbol of what was clicked
////@return
//    //none
////@global
//    //none
//function turnCounter(array){
//   if (array[current_turn] )
//}


//  Close logicController

//  Begin displayController
function displayController(displayObject) {

    //  Get player-list display data

    //  Display player-list data

    //  Get game-board display data

    //  Display game-board data

    //  Get statistics display data

    //  Display statistics data


}
//  Close displayController