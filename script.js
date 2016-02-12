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
    },
    get_grid_count: function () {
        return $('#game-area>*').length;
    },
    get_row_count: function () { // returns number of rows on game grid
        return Math.floor(Math.sqrt(this.get_grid_count()),1);
    },
    get_row_indexes: function (rowIndex) { // returns indexes in row # rowIndex
        if (rowIndex < 0 || rowIndex >= this.get_row_count()) {
            return null;
        }
        var elementArray = [];
        for (var i = (rowIndex * this.get_column_count()); i < (rowIndex * this.get_column_count()) + this.get_column_count(); i++) {
            elementArray.push(i);
        }
        return elementArray;
    },
    get_column_count: function () { // returns number of columns on game grid
        return this.get_row_count();
    },
    get_column_indexes: function (columnIndex) { // returns indexes in column # columnIndex
        if (columnIndex < 0 || columnIndex >= this.get_column_count()) {
            return null;
        }
        var elementArray = [];
        for (var i = columnIndex; i < this.get_grid_count(); i += this.get_column_count()) {
            elementArray.push(i);
        }
        return elementArray;

    },
    get_diagonal_indexes: function (diagonalIndex) { // returns indexes in diagonal # diagonalIndex (0: backslash, 1: forward slash)
        var elementArray = [];
        if (diagonalIndex == 0) {
            for (var i = 0; i < this.get_grid_count(); i += this.get_column_count() + 1) {
                elementArray.push(i);
            }
        } else if (diagonalIndex == 1) {
            for (var i = this.get_column_count() - 1; i < this.get_grid_count() - 1; i += this.get_column_count() - 1) {
                elementArray.push(i);
            }
        } else {
            return null;
        }
        return elementArray;
    }
};
//  Close inputInterpreter



var symbol1 = 'X';
var symbol2 = 'O';



//  Begin logicController
var logicController = {
    elementClickedArray: ['', '', '', '', '', '', '', '', ''],//array that holds clicked elements; checks if element is already clicked
    symbolStorageArray: ['', '', '', '', '', '', '', '', ''],//storage for clicked symbols
    playerArray: ["Player 1", "Player 2"],//array of players
    playerSymbol: ['X', 'O'],// array of player symbols
    playerTurn: "Player 1",//check to see who's turn it is
    playerDisplay: [],
    displayArray: [],//array of all the arrays
    messageArray: [],//array holding all outcomes
    currentPlayer: 0,//variable to toggle player 1 & 2
    counter: 0,//keeps track of turns
    currentPosition: null,// variable to store clickPosition

//@purpose: master function that calls the rest of the functions
//@params:
    //clickPosition: the number of the div clicked
//@returns:
    //displayArray.slice: a copy of the displayArray to pass through the DisplayController function
//@local:
    //this.elementClickedArray
    //this.currentPosition
    //this.assignPlayer(clickPosition)
    //this.storeStats()
    //this.finalMessage(result)
//@global
    //none
    click: function (clickPosition) {//define click function
        if (this.elementClickedArray[clickPosition] === '') {//if condition: if: this.elementCLickedArray[clickPosition] equals '' (empty string)
            this.elementClickedArray[clickPosition] = clickPosition;//assign clickPosition to this.elementClickedArray[clickPosition]
            this.currentPosition = clickPosition;//assign clickPosition to this.currentPosition
            this.assignPlayer(clickPosition);//call this.assignPlayer() function
            this.storeStats();//call this.storeStats() function
            result = this.checkOutcome();
            this.finalMessage(result);//call this.finalMessage(result)
        } else {//else
            //return;//return
        }
        return this.displayArray.slice();//return this.displayArray.slice
    },

//@purpose: creates the items to go into player array; player name, symbol, true or false it is that player's turn
//@params:
    //clickedPosition
//@returns:
    //none
//@local:
    //this.playerOne
    //this.playerArray
    //this.symbolArray
    //this.elementCLickedArray
    //this.currentPosition
    //this.counter
    //this.displayArray
//@global

    assignPlayer: function (clickedPosition) {//define assignPlayer function

        if (this.currentPlayer == 1) {//if condition: if: this.playerOne equals 1
            this.symbolStorageArray[clickedPosition] = this.playerSymbol[1];//assign this.playerSymbol[1] to this.symbolArray[clickedPosition]
            this.currentPlayer = 0;//toggle playerOne to switch to player2
        } else {//else
            this.symbolStorageArray[clickedPosition] = this.playerSymbol[0];//assign this.playerSymbol[0] to this.symbolArray[clickedPosition]
            this.currentPlayer = 1;//toggle playerOne to switch back to player1
        }
        this.counter++;//increment counter [where do we return counter?]
        //this.playerArray.push(this.singlePlayerArray);
        this.displayArray[0] = (this.playerArray);//push this.playerArray and this.symbolArray into this.displayArray
        this.displayArray[1] = (this.symbolStorageArray);

        this.playerDisplay = [];
        for (var i = 0; i < this.playerArray.length; i++) {//for loop: i is less than this.playerArray.length
            var temp = [];//assign empty array to variable temp
            temp.push(this.playerArray[i]);//push this.playerArray[i] into the temp array
            temp.push(this.playerSymbol[i]);//push this.playerArray[i] into the temp array
            if (i == this.currentPlayer) {
                temp.push(true);
            } else {
                temp.push(false);
            }
            this.playerDisplay.push(temp);
        }
        this.displayArray[0] = (this.playerDisplay);//push this.playerDisplay into this.displayArray
        this.displayArray[1] = (this.symbolStorageArray);//push this.symbolStorageArray into this.displayArray
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

    //@purpose:
//@params:
    //none
//@returns:
    //none
//@global
    checkOutcome: function () {
        var rowIndexes = [];//store row array from inputInterpreter.get_row_indexes(i)
        var columnIndexes = [];//store column array from inputInterpreter.get_column_indexes(i)
        var diagonalIndexes = [];//store diagonal array from inputInterpreter.get_diagonal_indexes(i)
        var rowCompare = null;// placeholder for this.symbolStorageArray[rowIndexes[0]]; symbol of the first element in row
        var columnCompare = null;// placeholder for this.symbolStorageArray[columnIndexes[0]]; symbol of the first element in column
        var diagonalCompare = null;// placeholder for this.symbolStorageArray[diagonalIndexes[0]]; symbol of the first element in diagonal
        var result = null;//store result


        for (var i = 0; i < inputInterpreter.get_row_count(); i++) {//for loop:
            rowIndexes = inputInterpreter.get_row_indexes(i);//stores the array from inputInterpreter.get_row_indexes(i)
            columnIndexes = inputInterpreter.get_column_indexes(i);//stores the array inputInterpreter.get_column_indexes(i)
            rowCompare = this.symbolStorageArray[rowIndexes[0]];//symbol of the first element in row
            columnCompare = this.symbolStorageArray[columnIndexes[0]];//symbol of the first element in column

            for (var j = 1; j < rowIndexes.length; j++) { //for loop:
                if (this.symbolStorageArray[rowIndexes[j]] == symbol1 || this.symbolStorageArray[rowIndexes[j]] == symbol2) {//
                    if (rowCompare == this.symbolStorageArray[rowIndexes[j]]) {
                        result = this.symbolStorageArray[rowIndexes[j]];
                    } else {
                        result = null;
                        break;
                    }
                } else {
                    result = null;
                    break;
                }
            }
            if (result != null) {
                return result;
            }
            for (var k = 1; k < columnIndexes.length; k++) {
                if (this.symbolStorageArray[columnIndexes[k]] == symbol1 || this.symbolStorageArray[columnIndexes[k]] == symbol2) {
                    if (columnCompare == this.symbolStorageArray[columnIndexes[k]]) {
                        result = this.symbolStorageArray[columnIndexes[j]];
                    } else {
                        result = null;
                        break;
                    }
                } else {
                    result = null;
                    break;
                }
            }
            if (result != null) {
                return result;
            }
        }
        for (var l = 0; l < 2; l++) {
            diagonalIndexes = inputInterpreter.get_diagonal_indexes(l);
            diagonalCompare = this.symbolStorageArray[diagonalIndexes[0]];
            for (var m = 1; m < diagonalIndexes.length; m++) {
                if (this.symbolStorageArray[diagonalIndexes[m]] == symbol1 || this.symbolStorageArray[diagonalIndexes[m]] == symbol2) {
                    if (diagonalCompare == this.symbolStorageArray[diagonalIndexes[m]]) {
                        result = this.symbolStorageArray[diagonalIndexes[m]];
                    } else {
                        result = null;
                        break;
                    }
                } else {
                    result = null;
                    break;
                }
            }
            if (result != null) {
                return result;
            }
        }
        if (this.counter == inputInterpreter.get_grid_count()) {
            result = "tie!";
            return result;
        }
    },

        finalMessage: function (result) {//define finalMessage function
            var output = null;
            if (result == symbol1 || result == symbol2) {//if condition: if: result equals "player1" or "player2"
                for (var i = 0; i < this.playerDisplay.length - 1; i++) {
                    if (result == this.playerDisplay[i][1]) {
                        output = (this.playerDisplay[i][0]);
                        this.messageArray.push(['Win!', output]);//['win',output] into this.messageArray
                    } else {
                        output = (this.playerDisplay[i + 1][0]);
                        this.messageArray.push(['Win!', output]);//['win',output] into this.messageArray
                    }
                }
            } else if (result == "tie!") {//else if result equals "tie"
                this.messageArray.push("Tie!");//['tie!'] into this.messageArray

                //    this.messageArray.push(['Win!', output]);//['win',output] into this.messageArray
                //}else if (result == "tie!"){//else if result equals "tie"
                //    this.messageArray.push(["Tie!"]);//['tie!'] into this.messageArray
                //}else{//else
                //    return;//return
                //}

            }
            this.displayArray[2]=(this.messageArray);//push this.messageArray into this.displayArray

        }
    };
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
            var $player = $("<li>").attr("id", playerList[i][0]);
            if (playerList[i][2]) {
                $player.addClass("current_player");
            } else {
                $player.removeClass("current_player");
            }
            $playerList.append(
                $player.append(
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
            var $gameCellImage;
            switch (gameCellList[i]) {
                case "X":
                    $gameCellImage = $('<img>', {src: "images/pirate_ttt1.jpg"});
                    break;
                case "O":
                    $gameCellImage = $('<img>', {src: "images/pirate_ttt.jpg"});
                    break;
                default:
                    $gameCellImage = $('<img>');
            }
            $gameBoard.append(
                //$("<div>", {class: "game-cell", text: gameCellList[i]})
                //$("<div>", {class: "game-cell", background-image: gameCellList[i]})
                $("<div>", {class: "game-cell"}).append(
                    $gameCellImage
                )
            );
        }

        //  Get statistics display data


        //  Display statistics data

        //  Get game finish condition data
        var game_message = displayObject[2];        //assigning display array's 2 index to variable
        if(game_message.length == 0){               //checking for condition if array length is equal to 0 then nothing to return
            return null;
        }
        else if(game_message[0] == 'Tie!'){      //checking for condition if array 0 index is equal to tie then show up in modal
            $("#messageModal .modal-body").fadeIn().html("Tie").addClass('text');
            $("#messageModal").modal('show');
        }
        else{        //checking for condition if array 0 index is equal to win then show up in modal
            $("#messageModal .modal-body").fadeIn().html("You won the game <img src='images/ttt_logo.png' style='width: 15%'>").addClass('text');
            $("#messageModal").modal('show');
        }

    }

};
//  Close displayController
