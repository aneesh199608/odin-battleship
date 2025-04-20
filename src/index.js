import './styles.css';
import GameController from './GameController.js';
import { renderBoards } from './dom.js';

const game = new GameController();

game.playerBoard.placeShip({ length: 1, hit() {}, isSunk: () => false }, 0, 0, 'horizontal');
game.computerBoard.placeShip({ length: 1, hit() {}, isSunk: () => false }, 1, 1, 'horizontal');

renderBoards(game);
