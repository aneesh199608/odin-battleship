class Gameboard {
    constructor() {
      // Create a 10x10 grid initialized with nulls
      this.grid = Array.from({ length: 10 }, () => Array(10).fill(null));
      this.missedAttacks = [];
      this.ships = [];
      this.attackedCoordinates = [];
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
          if (alreadyAttacked) return;
        
          this.attackedCoordinates.push([x, y]);
          
        const target = this.grid[y][x];
        if (target) {
          target.hit();
        }
        this.missedAttacks.push([x, y]);
      }

      areAllShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
      }

      
      
      
  }
  
  export default Gameboard;
  