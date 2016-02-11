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



function display_status(){   //game info function start
    player1_win++;
    player2_win++;
    ties++;
    games_played++;
    $("#1").html(player1_win);     // game information just imaginary selector at starting and first player games win counter
    $("#2").html(player2_win);       //second player games win counter
    $("#ties").html(ties);           //if tie then tie counter
    $("#games_played").html(games_played);
}
function display_win(){         //this function displayed message when user won the game
    $("#").html("<b>Hurray!!!  You Won</b><br><h5>Press the reset button to start again</h5> ");
    reset_button();
}
//reset function start
function reset_button(){          //  game reset function, re-seating all the values by clicking the reset button
    $('button').click(function(){
        $('.game-cell').empty();  //box should be empty when reset button clicked
        reset_status();
        display_status();
    });
}
function reset_status(){  //reset function declared to reset all the game box
    player1_win = 0;
    player2_win = 0;
    ties = 0;
}
}
//  Close displayController