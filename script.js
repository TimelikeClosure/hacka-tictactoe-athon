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
    player: 'x',
    playerArray:[],

    click: function(array){
        if (clickPosition != null){
            this.displayLogic();
        }else{
            this.turnCounter();
            this.switchPlayer();
            array.slice();
            this.displayLogic();
        }
    },

    turnCounter: function() {
        var countArray = [];
        this.counter++;//increment turn counter
        countArray = this.counter;
        playerArray.push(countArray)
        },

    switchPlayer: function() {
        var whosTurn = [];
        if (player == 'x'){
            this.player = 'o';
        }else {
            this.player = 'x';
        }
        whosTurn = this.player;
        playerArray.push(whosTurn);
        },

    displayLogic: function(){
        return playerArray;
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