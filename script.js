 
 const Player = (symbol) => {

    this.symbol = symbol;

    const getSymbol = () =>{
        return symbol;
    };

    const setSymbol = (symbol) =>{
        this.symbol = symbol;
    };

    return{getSymbol, setSymbol};
 };

 
 const GameBoard = () => {

    const board = ["","","","","","","","",""];
    const setField = (index, symbol) =>{
        if (index > board.length) return;
        board[index] = symbol;
    };

    const getField = (index) => {
        if (index > board.length) return;
        return board[index];
    }

    const clear = () => {
        for (i=0; i>board.length; i++)
        board[i]="";
    }

    const populateField = (player,index) => {
        if(board[index]!=="" || index > 8) return;
        board[index] = player.getSymbol();

        console.log(board);
    }

    const getBoard = () => {
        return board;
    }

    return{getBoard, setField, getField, clear, populateField};
 };


const GameController = () => {

    const board = GameBoard();
    const player1 = Player("X");
    const player2 = Player("O");

    let activePlayer = player1;

    const getBoard = () => {
        return board;
    }

    const switchTurn = () => {
        activePlayer = (activePlayer === player1 ? player2 : player1);
    }

    const playRound = (index) => {
        board.populateField(activePlayer, index);

        checkResult();
        switchTurn();
    }

    const getActivePlayer = () => {
        return activePlayer;
    }

    const checkResult = () => {
        let myBoard = board.getBoard();

        if(((myBoard[0]==myBoard[1] && myBoard[1]==myBoard[2]) && myBoard[0]!=="")||((myBoard[3]==myBoard[4] && myBoard[4]==myBoard[5]) && myBoard[3]!=="")||((myBoard[6]==myBoard[7] && myBoard[7]==myBoard[8]) && myBoard[6]!=="")
            || ((myBoard[0]==myBoard[3] && myBoard[3]==myBoard[6]) && myBoard[0]!=="")|| ((myBoard[1]==myBoard[4] && myBoard[4]==myBoard[7]) && myBoard[1]!=="")||((myBoard[2]==myBoard[5] && myBoard[5]==myBoard[8]) && myBoard[2]!=="")
            || ((myBoard[0]==myBoard[4] && myBoard[4]==myBoard[8]) && myBoard[0]!=="")|| ((myBoard[2]==myBoard[4] && myBoard[4]==myBoard[6]) && myBoard[2]!=="")){
                console.log(activePlayer.getSymbol() + ' won!');
            }
    }

    const clearBoard =() => {
        board.clear;
    }

    return {switchTurn, playRound, getActivePlayer, clearBoard, getBoard};
};
 
const ScreenController = () => {
    const game = GameController();
    const cells = document.querySelectorAll('.field');

        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

        cells.forEach(function(item, index) {
            item.addEventListener('click', function() {
              game.playRound(index);
              updateScreen();
            });
          });


    const updateScreen = () => {

        cells.forEach((cell, index) => {
            cell.innerHTML = board.getField(index);
        })
    }

}

ScreenController();



