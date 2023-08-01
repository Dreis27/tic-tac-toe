 const gameBoard = (() => {
    const board = ["x","x","","","","","","",""];
    const drawBoard = () => {
        const container = document.getElementById('game-grid');
        board.forEach((element,index) => {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.textContent = board[index];
            
            container.appendChild(cellDiv);
        });
    }

    return{drawBoard};
 })();

 gameBoard.drawBoard();