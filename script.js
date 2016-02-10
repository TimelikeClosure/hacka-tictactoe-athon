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
    turnCounter:function(){
    var counter = 0;
    counter++;
    }

}








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

}
//  Close displayController