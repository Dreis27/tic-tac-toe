 
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
    }
    
    const drawBoard = () => {
        const container = document.getElementById('game-grid');
        container.innerHTML = ''; 
        board.forEach((element,index) => {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.textContent = board[index];
            cellDiv.addEventListener('click', function(){
                if (board[index]!=="") return;
                board[index]=symbol;
                moveCount++;
                if((symbol==="x")){
                    symbol="o";
                } else if (symbol==="o"){
                    symbol="x";
                }


                drawBoard();
                if (checkResult() !== undefined){
                    console.log(checkResult());
                }
                else if (moveCount>=9){
                    console.log("Tie!")
                }
            });
            
            container.appendChild(cellDiv);
        });
    }

    const checkResult = () => {
        if((board[0]==board[1] && board[1]==board[2] && board[0]!=="")||(board[3]==board[4] && board[4]==board[5] && board[3]!=="")||(board[6]==board[7] && board[7]==board[8] && board[6]!=="")
            || (board[0]==board[3] && board[3]==board[6] && board[0]!=="")|| (board[1]==board[4] && board[4]==board[7] && board[1]!=="")||(board[2]==board[5] && board[5]==board[8] && board[2]!=="")
            || (board[0]==board[4] && board[4]==board[8] && board[0]!=="")|| (board[2]==board[4] && board[4]==board[6] && board[2]!=="")){
                return symbol + " won";
            }
    }

    return{drawBoard, checkResult, setField, getField, clear, populateField };
 };
const GameController = () => {
    const board = GameBoard();
    const player1 = Player("x");
    const player2 = Player("o");

    let activePlayer = player1;

    const switchTurn = () => {
        activePlayer = (activePlayer === player1 ? player2 : player1);
    }

};
 