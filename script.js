$(document).ready(function(){
    $('#game-area').on('click', '.game-cell', function(){
        cell_click($(this));
    });
});

//  Begin cell_click function
function cell_click($selector){
    var clickPosition = inputInterpreter($selector);
    console.log('clickPosition : ', clickPosition);
    var displayObject = logicController.click(clickPosition);
    console.log('displayObject : ', displayObject);
    displayController(displayObject);
}
//  Close cell_click function



//  Begin inputInterpreter
function inputInterpreter($selector) {
    return $selector.index();
}
//  Close inputInterpreter



//  Begin logicController
var logicController = {
    counter: 0, //keeps track of turns
    players: 'x',
    displayArray:[],//final output array
    playerArray:[],//array that holds all player info
    imgArray:[],//array that hold imgs/symbols
    statArray:[],//array that hold stats
    currentPlayerArray: [],//holds who's turn it is
    elementClickedArray: ['','','','','','','','',''],//array that holds clicked elements; checks if element is already clicked

    click: function(clickPosition){

        if (this.elementClickedArray[clickPosition] === ''){
            this.elementClickedArray[clickPosition] = clickPosition;
            this.switchPlayer();
            this.turnCounter();
            this.displayLogic();
        }else {
            this.displayLogic();
        }

    },

    assignSpace: function(clickPosition){

    },

    boardTiles: function(tileSymbol){
        this.imgArray.push(tileSymbol);
        this.displayArray.push(this.imgArray);
    },

    switchPlayer: function() {
        var whosTurn = [];
        if (this.players == 'x'){
            this.players = 'o';
        }else {
            this.players = 'x';
        }
        whosTurn = this.players;
        this.currentPlayerArray = whosTurn;
        },

    turnCounter: function() {
        var countArray = [];
        this.counter++;//increment turn counter
        countArray = this.counter;
    },

    displayLogic: function(){
        return this.displayArray.slice();

    }
};



//PlayerObject: function(number,symbol,turn){
//    this.number = number;
//    this.symbol = symbol;
//    this.turn = turn;
//},
//
//playerInfo: function(array) {
//    var result = new this.PlayerObject(array[0],array[1],array[2]);
//    var tileSymbol = array[1];
//    this.playerArray.push(result);
//    this.displayArray.push(this.playerArray);
//},




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