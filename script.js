var clickPosition = null;
var clickPositionArray = [];

$(document).ready(function(){
    $('#game-area').on('click', '.game-cell', function(){
        cell_click($(this));
    });
    //  Display test function
    /*$('#player_list').click(function(){
        var bob = [[["player2","O",false],["player1","X",true]],'',''];
        displayController(bob);
    });*/
});

//  Begin cell_click function
function cell_click($selector){
    var clickPosition = inputInterpreter.cell_click($selector);
    console.log('clickPosition : ', clickPosition);
    var displayObject = logicController.click(clickPosition);
    console.log('displayObject : ', displayObject);
    displayController(displayObject);
}
//  Close cell_click function



//  Begin inputInterpreter
inputInterpreter = {
    cell_click: function ($selector) {
        return $selector.index();
    }
};
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
                $("<div>",{class: "player-turn", text: turn}),
                $("<div>",{class: "player-symbol", text: playerList[i][1]}),
                $("<div>",{class: "player-name", text: (playerList[i][0]+":")})
            )
        );
    }

    //  Get game-board display data

    //  Display game-board data

    //  Get statistics display data

    //  Display statistics data


}
//  Close displayController