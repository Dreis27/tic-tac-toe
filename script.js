 const gameBoard = (() => {
    const board = ["","","","","","","","",""];
    let symbol = "x";
    const drawBoard = () => {
        const container = document.getElementById('game-grid');
        container.innerHTML = ''; 
        board.forEach((element,index) => {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.textContent = board[index];
            cellDiv.addEventListener('click', function(){
                board[index]=symbol;
                if((symbol==="x")){
                    symbol="o";
                } else if (symbol==="o"){
                    symbol="x";
                }

                drawBoard();
                console.log(checkResult());
            });
            
            container.appendChild(cellDiv);
        });
    }

    const checkResult = () => {
        if((board[0]==board[1] && board[1]==board[2] && board[0]!=="")||(board[3]==board[4] && board[4]==board[5] && board[3]!=="")||(board[6]==board[7] && board[7]==board[8] && board[6]!=="")
            || (board[0]==board[3] && board[3]==board[6] && board[0]!=="")|| (board[1]==board[4] && board[4]==board[7] && board[1]!=="")||(board[2]==board[5] && board[5]==board[8] && board[2]!=="")
            || (board[0]==board[4] && board[4]==board[8] && board[0]!=="")|| (board[2]==board[4] && board[4]==board[6] && board[2]!=="")){
                return "someone won";
            }
    }

    return{drawBoard, checkResult};
 })();

 gameBoard.drawBoard();
 