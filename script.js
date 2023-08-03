 
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
        if(index > 8) return;

        board[index] = player.getSymbol();

        console.log(board);
    }

    const getRoundCounter = () => {
        return roundCounter;
    }

    const getBoard = () => {
        return board;
    }

    return{getRoundCounter, getBoard, setField, getField, clear, populateField};
 };


const GameController = () => {

    const board = GameBoard();
    const player1 = Player("X");
    const player2 = Player("O");

    let activePlayer = player1;
    let roundCounter = 0;

    const getBoard = () => {
        return board;
    }

    const switchTurn = () => {
        activePlayer = (activePlayer === player1 ? player2 : player1);
    }

    const playRound = (index) => {
        roundCounter++;
    
        board.populateField(activePlayer, index);

        if(checkResult() === true){
            console.log(activePlayer.getSymbol() + " WON!");
            return true;
        }

        if (roundCounter>8){
            console.log("DRAW!");
        }
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
                return true;
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
            if (board.getBoard()[index]!=='') return;
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



