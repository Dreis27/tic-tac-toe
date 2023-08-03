 
 const Player = (symbol) =>{
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

    const checkResult = () => {
        if((board[0]==board[1] && board[1]==board[2] && board[0]!=="")||(board[3]==board[4] && board[4]==board[5] && board[3]!=="")||(board[6]==board[7] && board[7]==board[8] && board[6]!=="")
            || (board[0]==board[3] && board[3]==board[6] && board[0]!=="")|| (board[1]==board[4] && board[4]==board[7] && board[1]!=="")||(board[2]==board[5] && board[5]==board[8] && board[2]!=="")
            || (board[0]==board[4] && board[4]==board[8] && board[0]!=="")|| (board[2]==board[4] && board[4]==board[6] && board[2]!=="")){
                console.log()
            }
    }

    return{ checkResult, setField, getField, clear, populateField};
 };


const GameController = () => {
    const board = GameBoard();
    const player1 = Player("x");
    const player2 = Player("o");

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
        if((board[0]==board[1] && board[1]==board[2] && board[0]!=="")||(board[3]==board[4] && board[4]==board[5] && board[3]!=="")||(board[6]==board[7] && board[7]==board[8] && board[6]!=="")
            || (board[0]==board[3] && board[3]==board[6] && board[0]!=="")|| (board[1]==board[4] && board[4]==board[7] && board[1]!=="")||(board[2]==board[5] && board[5]==board[8] && board[2]!=="")
            || (board[0]==board[4] && board[4]==board[8] && board[0]!=="")|| (board[2]==board[4] && board[4]==board[6] && board[2]!=="")){
                console.log(activePlayer + 'won!');
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
        updateScreen();

        return{updateScreen};
}
ScreenController();



