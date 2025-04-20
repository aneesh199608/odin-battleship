import Player from './Player';
import Gameboard from './Gameboard';

class GameController {
  constructor() {
    this.player = new Player();
    this.computer = new Player(true);

    this.playerBoard = new Gameboard();
    this.computerBoard = new Gameboard();

    this.currentTurn = 'player';
  }

  playTurn(x, y) {
    if (this.currentTurn !== 'player') return;

    this.player.attack(this.computerBoard, x, y);
    this.currentTurn = 'computer';

    // Simulate computer's immediate response
    this.computer.attackRandom(this.playerBoard);
    this.currentTurn = 'player';
  }
}

export default GameController;
