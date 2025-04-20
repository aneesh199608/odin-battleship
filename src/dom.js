// src/dom.js
export function renderBoards(game) {
    const playerBoardDiv = document.getElementById('player-board');
    const computerBoardDiv = document.getElementById('computer-board');
  
    playerBoardDiv.innerHTML = '';
    computerBoardDiv.innerHTML = '';
  
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        // Player board
        const playerCell = document.createElement('div');
        playerCell.classList.add('cell');
        const playerHasShip = game.playerBoard.grid[y][x];
        playerCell.textContent = playerHasShip ? '🚢' : '';
        playerBoardDiv.appendChild(playerCell);
  
        // Computer board
        const compCell = document.createElement('div');
        compCell.classList.add('cell');
        const isHit = game.computerBoard.attackedCoordinates.some(([ax, ay]) => ax === x && ay === y);
        const hasShip = game.computerBoard.grid[y][x];
  
        if (isHit && hasShip) {
          compCell.textContent = '🔥';
        } else if (isHit) {
          compCell.textContent = '💦';
        }
  
        compCell.addEventListener('click', () => {
          game.playTurn(x, y);
          renderBoards(game); // re-render after each move
        });
  
        computerBoardDiv.appendChild(compCell);
      }
    }
  }
  