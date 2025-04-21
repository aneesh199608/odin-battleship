// src/dom.js
export function renderBoards(game) {
    const playerBoardDiv = document.getElementById('player-board');
    const computerBoardDiv = document.getElementById('computer-board');
    const turnText = document.getElementById('turn-indicator');
    const feedbackText = document.getElementById('feedback-indicator');
  
    playerBoardDiv.innerHTML = '';
    computerBoardDiv.innerHTML = '';

    playerBoardDiv.className = 'board';
    computerBoardDiv.className = 'board';

    turnText.textContent = game.currentTurn === 'player' ? "Player's turn" : "Computer's turn";
    // feedbackText.textContent = '';
  
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        // Player board
        const playerCell = document.createElement('div');
        playerCell.classList.add('cell');

        const playerHasShip = game.playerBoard.grid[y][x];
        const wasAttacked = game.playerBoard.attackedCoordinates.some(
          ([ax, ay]) => ax === x && ay === y
        );

        if (wasAttacked && playerHasShip) {
          playerCell.textContent = '✅'; // Computer hit a ship
        } else if (wasAttacked && !playerHasShip) {
          playerCell.textContent = '❌'; // Computer missed
        } else if (playerHasShip) {
          playerCell.textContent = '🚢'; // Show ship only if not yet hit
        } else {
          playerCell.textContent = ''; // empty cell
        }

        playerBoardDiv.appendChild(playerCell);

  
        // Computer board
        const compCell = document.createElement('div');
        compCell.classList.add('cell');
        const isHit = game.computerBoard.attackedCoordinates.some(([ax, ay]) => ax === x && ay === y);
        const hasShip = game.computerBoard.grid[y][x];
  
        if (isHit && hasShip) {
          compCell.textContent = '✅';
        } else if (isHit) {
          compCell.textContent = '❌';
        }
  
        compCell.addEventListener('click', () => {
          const result = game.playTurn(x, y);
        
          const feedbackText = document.getElementById('feedback-indicator');
          if (result === 'hit') {
            feedbackText.textContent = `You hit a ship at (${x}, ${y})! 🎯`;
          } else if (result === 'miss') {
            feedbackText.textContent = `You missed at (${x}, ${y}) ❌`;
          } else if (result === 'invalid') {
            feedbackText.textContent = `You already attacked (${x}, ${y})!`;
          }
        
          renderBoards(game);
        });        
  
        computerBoardDiv.appendChild(compCell);
      }
    }
  }
