import './styles.css';
import GameController from './GameController';
import { renderBoards } from './dom';

const game = new GameController();
game.playerBoard.placeShip(game.playerBoard.ships[0] ?? { length: 1 }, 0, 0, 'horizontal');
game.computerBoard.placeShip(game.computerBoard.ships[0] ?? { length: 1 }, 1, 1, 'horizontal');

renderBoards(game); // call the DOM renderer
