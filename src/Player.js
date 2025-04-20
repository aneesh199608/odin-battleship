// src/Player.js

class Player {
    constructor(isComputer = false) {
      this.isComputer = isComputer;
      this.availableMoves = [];
  
      if (isComputer) {
        // Populate 100 coordinates: [0,0] to [9,9]
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
  
    attackRandom(board) {
      if (!this.availableMoves.length) return;
  
      const index = Math.floor(Math.random() * this.availableMoves.length);
      const [x, y] = this.availableMoves.splice(index, 1)[0];
      board.receiveAttack(x, y);
    }
  }
  
  export default Player;
  