import Player from './Player.js';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';

test('player can attack the enemy board', () => {
  const player1 = new Player();
  const enemyBoard = new Gameboard();
  const enemyShip = new Ship(1);

  enemyBoard.placeShip(enemyShip, 2, 2, 'horizontal');

  player1.attack(enemyBoard, 2, 2);

  expect(enemyShip.isSunk()).toBe(true);
});

test('computer makes a random legal attack', () => {
    const humanBoard = new Gameboard();
    const aiPlayer = new Player(true); // true = isComputer
  
    aiPlayer.attackRandom(humanBoard);
  
    // Expect that exactly one coordinate was attacked
    expect(humanBoard.attackedCoordinates.length).toBe(1);
  });

  test('players alternate turns by attacking each other', () => {
    const player = new Player(); // human
    const computer = new Player(true); // AI
    const computerBoard = new Gameboard();
    const playerBoard = new Gameboard();
  
    // Place dummy ships to avoid game over
    computerBoard.placeShip(new Ship(1), 0, 0, 'horizontal');
    playerBoard.placeShip(new Ship(1), 1, 1, 'horizontal');
  
    // Turn 1: human attacks computer
    player.attack(computerBoard, 0, 0);
    expect(computerBoard.attackedCoordinates).toContainEqual([0, 0]);
  
    // Turn 2: computer randomly attacks player
    computer.attackRandom(playerBoard);
    expect(playerBoard.attackedCoordinates.length).toBe(1);
  });
  
  
