// src/Ship.js
class Ship {
    constructor(length, name='Ship') {
      this.length = length;
      this.name = name;
      this.hits = 0;
    }
  
    hit() {
      if (this.hits < this.length) {
        this.hits += 1;
      }
    }
  
    isSunk() {
      return this.hits >= this.length;
    }
  }
  
  export default Ship;
  