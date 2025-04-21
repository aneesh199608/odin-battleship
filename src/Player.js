// src/Player.js
import Ship from './Ship.js';

class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.availableMoves = [];

    if (isComputer) {
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          this.availableMoves.push([x, y]);
        }
      }
    }
  }

  attack(board, x, y) {
    board.receiveAttack(x, y);
  }

  placeShipsRandomly(board, label = 'Player') {
    const shipLengths = [5, 4, 3, 2, 1];
    const directions = ['horizontal', 'vertical'];

    shipLengths.forEach(length => {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const direction = directions[Math.floor(Math.random() * 2)];

        if (board.canPlaceShip(length, x, y, direction)) {
          const ship = new Ship(length); // ✅ Create actual Ship instance
          board.placeShip(ship, x, y, direction);
          placed = true;
          console.log(`${label}: Placed ship of length ${length} at (${x}, ${y}) with direction ${direction}`);
        } else {
          console.log(`Failed to place ship of length ${length} at (${x}, ${y}) with direction ${direction}`);
        }
      }
    });
  }

  attackRandom(board) {
    if (!this.availableMoves.length) return;

    const index = Math.floor(Math.random() * this.availableMoves.length);
    const [x, y] = this.availableMoves.splice(index, 1)[0];
    board.receiveAttack(x, y);
  }
}

export default Player;
