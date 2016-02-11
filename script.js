$(document).ready(function(){
    $('#game-area').on('click', '.game-cell', function(){
        cell_click($(this));
    });
});

//  Begin cell_click function
function cell_click($selector){
    var clickPosition = inputInterpreter.cell_click($selector);
    console.log('clickPosition : ', clickPosition);
    var displayObject = logicController.click(clickPosition);
    console.log('displayObject : ', displayObject);
    displayController.updateGame(displayObject);
}
//  Close cell_click function



//  Begin inputInterpreter
inputInterpreter = {
    cell_click: function ($selector) {
        return $selector.index();
    }
};
//  Close inputInterpreter



var symbol1 = 'x';
var symbol2 = 'o';
var p1Score =3;
var p2Score =2;



//  Begin logicController
var logicController = {
    elementClickedArray: ['', '', '', '', '', '', '', '', ''],//array that holds clicked elements; checks if element is already clicked
    symbolArray: ['', '', '', '', '', '', '', '', ''],//storage for clicked symbols
    playerArray: [],//array that holds all player info
    displayArray: [],//array of all the arrays
    messageArray: [],//array holding all outcomes
    playerOne: 1,//variable to toggle player 1 & 2
    counter: 0,//keeps track of turns
    currentPosition: null,// variable to store clickPosition

//@purpose: master function that calls the rest of the functions
//@params:
    //clickPosition: the number of the div clicked
//@returns:
    //displayArray.slice: a copy of the displayArray to pass through the DisplayController function
//@local:
    //this.elementClickedArray
//@global
    //none
    click: function (clickPosition) {
        if (this.elementClickedArray[clickPosition] === '') {
            this.elementClickedArray[clickPosition] = clickPosition;
            this.currentPosition = clickPosition;
            this.assignPlayer(clickPosition);
            this.storeStats();
            this.finalMessage(p1Score,p2Score);
        } else {
            //return;
        }
    },

//@purpose: creates the items to go into player array; player name, symbol, true or false it is that player's turn
//@params:
    //none
//@returns:
    //playerArray:first array in DisplayArray
//@global
    //symbol1:symbol (img) for player 1
    //symbol2:symbol (img) for player 2
    assignPlayer: function (clickedPosition) {


        if (this.playerOne == 1) {
            this.playerArray[0] = 1;
            this.playerArray[1] = symbol1;
            this.symbolArray[clickedPosition] = symbol1;
            this.playerOne = 0;
        } else {
            this.playerArray[0] = 2;
            this.playerArray[1] = symbol2;
            this.symbolArray[clickedPosition] = symbol2;
            this.playerOne = 1;
        }
        if (this.elementClickedArray[this.currentPosition] == clickedPosition) {
            this.playerArray[2] = true;
            this.currentPosition = null;
        } else {
            this.playerArray[2] = false;
        }
        this.counter++;
        this.displayArray.push(this.playerArray, this.symbolArray);

    },

//@purpose: update stats section
//@params:
    //none
//@returns:
    //none
//@global
    //none
    storeStats: function () {
//    x wins++
//    o wins++
        //this.displayArray.push(this.statsArray
    },

    finalMessage: function (p1Score,p2Score){
        if (p1Score > p2Score) {
            this.messageArray.push(['Win!', 'Player 1'])
        }else if (p1Score < p2Score){
            this.messageArray.push(['Win!', 'Player 2'])
        }else if (p1Score == p2Score){
            this.messageArray.push(["Tie!"])
        }else{
            return;
        }
        this.displayArray.push(this.messageArray);
    }

};
//@purpose: update stats section
//@params:
    //none
//@returns:
    //none
//@global
    //none






//counter: 0, //keeps track of turns
//players: 'x',
//displayArray:[],//final output array
//playerArray:[],//array that holds all player info
//imgArray:[],//array that hold imgs/symbols
//statArray:[],//array that hold stats
//currentPlayerArray: [],//holds who's turn it is
//elementClickedArray: ['','','','','','','','',''],//array that holds clicked elements; checks if element is already clicked
//
//click: function(clickPosition){
//
//    if (this.elementClickedArray[clickPosition] === ''){
//        this.elementClickedArray[clickPosition] = clickPosition;
//        this.switchPlayer();
//        this.turnCounter();
//        this.displayLogic();
//    }else {
//        this.displayLogic();
//    }
//
//},
//
//assignSpace: function(clickPosition){
//
//},
//
//boardTiles: function(tileSymbol){
//    this.imgArray.push(tileSymbol);
//    this.displayArray.push(this.imgArray);
//},
//
//switchPlayer: function() {
//    var whosTurn = [];
//    if (this.players == 'x'){
//        this.players = 'o';
//    }else {
//        this.players = 'x';
//    }
//    whosTurn = this.players;
//    this.currentPlayerArray = whosTurn;
//    },
//
//turnCounter: function() {
//    var countArray = [];
//    this.counter++;//increment turn counter
//    countArray = this.counter;
//},


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
//@purpose: keep track of the number of turns taken
//@params:
    //clickPosition: the symbol of what was clicked
//@return
    //none
//@global
    //none
//function turnCounter(array){
//   if (array[current_turn] )
//}

//displayLogic: function(){
//    return this.displayArray.slice();
//
//}


//  Close logicController

//  Begin displayController
var displayController = {

    updateGame: function(displayObject) {
        //  Get player-list display data
        var playerList = displayObject[0];

        //  Display player-list data
        var $playerList = $('#player_list');
        $playerList.html("");
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i][2]) {
                var turn = "-->";
            } else {
                turn = "";
            }
            $playerList.append(
                $("<li>").attr("id", playerList[i][0]).append(
                    $("<div>", {class: "player-turn", text: turn}),
                    $("<div>", {class: "player-symbol", text: playerList[i][1]}),
                    $("<div>", {class: "player-name", text: (playerList[i][0] + ":")})
                )
            );
        }

        //  Get game-board display data
        var gameCellList = displayObject[1];

        //  Display game-board data
        var $gameBoard = $("#game-area");
        $gameBoard.html("");
        for (var i = 0; i < gameCellList.length; i++) {
            $gameBoard.append(
                $("<div>", {class: "game-cell", text: gameCellList[i]})
            );
        }

        //  Get statistics display data

        //  Display statistics data

        //  Get game finish condition data

        //  Display game finish condition

    }

};
//  Close displayController
