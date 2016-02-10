$(document).ready(function(){
    $('#game-area').on('click', '.game-cell', function(){
        cell_click($(this));
    });
});

//  Begin cell_click function
function cell_click(selector){
    var clickPosition = inputInterpreter(selector);
    var displayObject = logicController(clickPosition);
    displayController(displayObject);
}
//  Close cell_click function

//  Begin inputInterpreter
function inputInterpreter(selector) {

}
//  Close inputInterpreter

//  Begin logicController
function logicController(clickPosition) {

}
//  Close logicController

//  Begin displayController
function displayController(displayObject) {

}
//  Close displayController