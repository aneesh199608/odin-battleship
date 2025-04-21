import Player from './Player.js';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';

class GameController {
  constructor(uiHandlers = {}) {
    this.player = new Player();
    this.computer = new Player(true);

    this.playerBoard = new Gameboard();
    this.computerBoard = new Gameboard();

    this.player.placeShipsRandomly(this.playerBoard, 'Player');
    this.computer.placeShipsRandomly(this.computerBoard, 'Computer');


    this.currentTurn = 'player';
    this.ui = {
      renderBoards: uiHandlers.renderBoards || (() => {}),
      showFeedback: uiHandlers.showFeedback || (() => {}),
      showSunkMessage: uiHandlers.showSunkMessage || (() => {}),
      showGameOver: uiHandlers.showGameOver || (() => {})
    };
    this.gameOver = false;
  }

  playTurn(x, y) {
    if (this.gameOver || this.currentTurn !== 'player') return;

    const attackResult = this.player.attack(this.computerBoard, x, y);
    if (attackResult === false) {
      this.ui.showFeedback(`You already attacked (${x}, ${y})!`);
      return 'invalid';
    }

    const target = this.computerBoard.grid[y][x];
    const isHit = target !== null;

    if (target?.ship?.isSunk()) {
      this.ui.showSunkMessage(target.ship, 'computer');
    }

    if (this.computerBoard.areAllShipsSunk()) {
      this.handleGameOver('Player');
      this.ui.renderBoards(this);
      return;
    }

    this.ui.renderBoards(this);

    this.currentTurn = 'computer';
    setTimeout(() => {
      if (this.gameOver) return;

      this.computer.attackRandom(this.playerBoard);
      const lastAttack = this.playerBoard.attackedCoordinates.at(-1);

      if (lastAttack) {
        const [cx, cy] = lastAttack;
        const cell = this.playerBoard.grid[cy][cx];
        if (cell?.ship) {
          this.ui.showFeedback(`Computer hit your ${cell.ship.name} at (${cx}, ${cy})! 💥`);
          if (cell.ship.isSunk()) {
            this.ui.showSunkMessage(cell.ship, 'player');
          }
        } else {
          this.ui.showFeedback(`Computer missed at (${cx}, ${cy}) ❌`);
        }
      }

      if (this.playerBoard.areAllShipsSunk()) {
        this.handleGameOver('Computer');
      } else {
        this.currentTurn = 'player';
      }

      this.ui.renderBoards(this);
    }, 300);

    return isHit ? 'hit' : 'miss';
  }

  handleGameOver(winner) {
    this.gameOver = true;
    this.ui.showGameOver(winner);
  }
}

export default GameController;
