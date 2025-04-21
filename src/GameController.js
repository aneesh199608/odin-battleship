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
    this.renderBoards = renderBoards;
    this.gameOver = false;
  }

  playTurn(x, y) {
    if (this.gameOver || this.currentTurn !== 'player') return;

    const attackResult = this.player.attack(this.computerBoard, x, y);

    if (attackResult === false) {
      const feedback = document.getElementById('feedback-indicator');
      feedback.textContent = `You already attacked (${x}, ${y})!`;
      return 'invalid';
    }

    const target = this.computerBoard.grid[y][x];
    const isHit = target !== null;

    if (target && target.ship && target.ship.isSunk()) {
      this.showSunkMessage(target.ship);
    }

    if (this.computerBoard.areAllShipsSunk()) {
      this.handleGameOver('Player');
      this.renderBoards(this);
      return;
    }

    this.renderBoards(this); // Render board after player's move

    this.currentTurn = 'computer';
    setTimeout(() => {
      if (this.gameOver) return;

      const compAttackResult = this.computer.attackRandom(this.playerBoard);

      // Get last attacked coordinate by computer
      const lastAttack = this.playerBoard.attackedCoordinates.at(-1);
      const feedback = document.getElementById('feedback-indicator');

      if (lastAttack) {
        const [cx, cy] = lastAttack;
        const cell = this.playerBoard.grid[cy][cx];

        if (cell && cell.ship) {
          feedback.textContent = `Computer hit your ${cell.ship.name} at (${cx}, ${cy})! 💥`;
          if (cell.ship.isSunk()) {
            this.showSunkMessage(cell.ship, 'player');
          }
        } else {
          feedback.textContent = `Computer missed at (${cx}, ${cy}) ❌`;
        }
      }

      if (this.playerBoard.areAllShipsSunk()) {
        this.handleGameOver('Computer');
      } else {
        this.currentTurn = 'player';
      }

      this.renderBoards(this);
    }, 300);

    return isHit ? 'hit' : 'miss';
  }

  showSunkMessage(ship, owner = 'computer') {
    const feedbackText = document.getElementById('feedback-indicator');
    const message =
      owner === 'player'
        ? `The computer sunk your ${ship.name}! 💀`
        : `You sunk the computer's ${ship.name}! 🚢🔥`;

    feedbackText.textContent = message;
  }

  handleGameOver(winner) {
    this.gameOver = true;
    alert(`Game Over! ${winner} wins!`);
  }
}

export default GameController;
