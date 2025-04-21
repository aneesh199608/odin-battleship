class Gameboard {
    constructor() {
      // Create a 10x10 grid initialized with nulls
      this.grid = Array.from({ length: 10 }, () => Array(10).fill(null));
      this.missedAttacks = [];
      this.ships = [];
      this.attackedCoordinates = [];
    }
  
    canPlaceShip(length, x, y, direction) {
        if (direction === 'horizontal') {
          if (x + length > 10) return false;
          for (let i = 0; i < length; i++) {
            if (this.grid[y][x + i] !== null) return false;
          }
        } else if (direction === 'vertical') {
          if (y + length > 10) return false;
          for (let i = 0; i < length; i++) {
            if (this.grid[y + i][x] !== null) return false;
          }
        }
        return true;
      }

    placeShip(ship, x, y, direction) {
        if (direction === 'horizontal') {
          for (let i = 0; i < ship.length; i++) {
            this.grid[y][x + i] = ship;
          }
        } else if (direction === 'vertical') {
          for (let i = 0; i < ship.length; i++) {
            this.grid[y + i][x] = ship;
          }
        }
        this.ships.push(ship);
      }

      receiveAttack(x, y) {

        const alreadyAttacked = this.attackedCoordinates.some(
            ([prevX, prevY]) => prevX === x && prevY === y
          );
          if (alreadyAttacked) return false;
        
          this.attackedCoordinates.push([x, y]);
          
        const target = this.grid[y][x];
        if (target) {
          target.hit();
        } else {
        this.missedAttacks.push([x, y]);
        }
        return true;
      }

      areAllShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
      }

      
      
      
  }
  
  export default Gameboard;
