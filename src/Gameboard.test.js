import Gameboard from './Gameboard';
import Ship from './Ship';

test('places a ship at a specific coordinate', () => {
  const board = new Gameboard();
  const ship = new Ship(3);

  board.placeShip(ship, 0, 0, 'horizontal'); // x=0, y=0

  // Now test that the ship is placed on the grid
  // Let's assume the board stores a 2D array of cells
  expect(board.grid[0][0]).toBe(ship);
  expect(board.grid[0][1]).toBe(ship);
  expect(board.grid[0][2]).toBe(ship);
});

test('places a ship vertically on the board', () => {
    const board = new Gameboard();
    const ship = new Ship(2);
  
    board.placeShip(ship, 1, 1, 'vertical');
  
    expect(board.grid[1][1]).toBe(ship);
    expect(board.grid[2][1]).toBe(ship);
  });

  test('records a hit on a ship at a coordinate', () => {
    const board = new Gameboard();
    const ship = new Ship(3);
  
    board.placeShip(ship, 0, 0, 'horizontal');
    board.receiveAttack(1, 0); // hit at x=1, y=0
  
    // ship.hit() should have been called once
    expect(ship.hits).toBe(1);
  });

  test('records a missed attack when no ship is present', () => {
    const board = new Gameboard();
    board.receiveAttack(5, 5); // no ship placed here
  
    expect(board.missedAttacks).toContainEqual([5, 5]);
  });

  test('returns true when all ships are sunk', () => {
    const board = new Gameboard();
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
  
    board.placeShip(ship1, 0, 0, 'horizontal');
    board.placeShip(ship2, 1, 0, 'horizontal');
  
    board.receiveAttack(0, 0); // hit ship1
    board.receiveAttack(1, 0); // hit ship2
  
    expect(board.areAllShipsSunk()).toBe(true);
  });

  test('prevents duplicate attacks on the same coordinate', () => {
    const board = new Gameboard();
    const ship = new Ship(2);
  
    board.placeShip(ship, 0, 0, 'horizontal');
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 0); // repeat attack
  
    expect(ship.hits).toBe(1); // still just 1 hit, not 2
  });

  test('returns true when a vertical ship is sunk', () => {
    const board = new Gameboard();
    const ship = new Ship(2);
  
    board.placeShip(ship, 4, 4, 'vertical');
    board.receiveAttack(4, 4);
    board.receiveAttack(4, 5);
  
    expect(board.areAllShipsSunk()).toBe(true);
  });
  
  
  
  