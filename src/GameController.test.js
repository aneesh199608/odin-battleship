import GameController from './GameController.js';
import Ship from './Ship.js';

jest.useFakeTimers(); // <--- Add this outside your test

test('controller handles alternating turns and updates boards', () => {
  const mockUI = {
    renderBoards: jest.fn(),
    showFeedback: jest.fn(),
    showSunkMessage: jest.fn(),
    showGameOver: jest.fn(),
  };
  
  const game = new GameController(mockUI);

  // Place dummy ships so game doesn't end immediately
  game.playerBoard.placeShip(new Ship(1), 0, 0, 'horizontal');
  game.computerBoard.placeShip(new Ship(1), 1, 1, 'horizontal');

  // Turn 1: human attacks (1,1) where computer has a ship
  game.playTurn(1, 1);

  // Run the delayed computer move
  jest.runAllTimers(); // ⏳ simulates the 300ms setTimeout

  // ✅ Now both should have one attack recorded
  expect(game.computerBoard.attackedCoordinates.length).toBe(1); // Player attack
  expect(game.playerBoard.attackedCoordinates.length).toBe(1);   // Computer retaliates
});
