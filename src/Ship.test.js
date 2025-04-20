import Ship from './Ship.js';

test('Ship takes hits and reports sunk correctly', () => {
  const destroyer = new Ship(3);

  expect(destroyer.isSunk()).toBe(false);

  destroyer.hit();
  expect(destroyer.isSunk()).toBe(false);

  destroyer.hit();
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(true);
});
