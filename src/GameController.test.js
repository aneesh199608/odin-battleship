import GameController from './GameController';
import Ship from './Ship';

test('controller handles alternating turns and updates boards', () => {
  const game = new GameController();

  // Place dummy ships so game doesn't end immediately
  game.playerBoard.placeShip(new Ship(1), 0, 0, 'horizontal');
  game.computerBoard.placeShip(new Ship(1), 1, 1, 'horizontal');

  // Turn 1: human attacks (1,1) where computer has a ship
  game.playTurn(1, 1);

  // Computer auto-attacks the player's board
  // Now both boards should have 1 attacked coordinate
  expect(game.computerBoard.attackedCoordinates.length).toBe(1);
  expect(game.playerBoard.attackedCoordinates.length).toBe(1);
});
