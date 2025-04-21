import Player from './Player.js';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';

class GameController {
  constructor(renderBoards) {
    this.player = new Player();
    this.computer = new Player(true);

    this.playerBoard = new Gameboard();
    this.computerBoard = new Gameboard();

    this.playerBoard.placeShip(new Ship(5, 'Carrier'), 0, 0, 'horizontal');
this.playerBoard.placeShip(new Ship(4, 'Battleship'), 1, 0, 'horizontal');
this.computerBoard.placeShip(new Ship(5, 'Carrier'), 0, 0, 'horizontal');
this.computerBoard.placeShip(new Ship(4, 'Battleship'), 1, 0, 'horizontal');

    this.currentTurn = 'player';
    this.renderBoards = renderBoards; // Store renderBoards
    this.gameOver = false;
  }

  playTurn(x, y) {
    if (this.gameOver || this.currentTurn !== 'player') return;

    // Player attacks
    const attackResult = this.player.attack(this.computerBoard, x, y);

    // Check if the attack was valid (not a repeated coordinate)
    if (attackResult === false) {
      console.log("Invalid move, try again."); // Or provide UI feedback
      return; // Don't proceed if the move was invalid
    }

    // Check if a ship was sunk
    const attackedCell = this.computerBoard.grid[x][y];
    if (attackedCell && attackedCell.ship && attackedCell.ship.isSunk()) {
      this.showSunkMessage(attackedCell.ship);
    }

    // Check for game over after player's turn
    if (this.computerBoard.areAllShipsSunk()) {
      this.handleGameOver('Player');
      this.renderBoards(this); // Render final state
      return;
    }

    // Update the board immediately after player's attack
    this.renderBoards(this);

    // Switch turn to computer and schedule its attack
    this.currentTurn = 'computer';
    setTimeout(() => {
      if (this.gameOver) return; // Check game over again before computer attacks

      this.computer.attackRandom(this.playerBoard);

      // Check for game over after computer's turn
      if (this.playerBoard.areAllShipsSunk()) {
        this.handleGameOver('Computer');
      } else {
        this.currentTurn = 'player'; // Switch back to player only if game is not over
      }

      // Re-render boards after computer's attack
      this.renderBoards(this);
    }, 300); // 300ms delay
  }

  showSunkMessage(ship) {
    // Using alert for now as planned
    alert(`You sunk the computer's ${ship.name}!`);
    // TODO: Replace with a better notification (toast, floating text, etc.)
  }

  handleGameOver(winner) {
    this.gameOver = true;
    alert(`Game Over! ${winner} wins!`);
    // TODO: Add more robust game over UI handling
  }

}

export default GameController;
