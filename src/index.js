import './styles.css';
import GameController from './GameController.js';
import { renderBoards } from './dom.js';

const game = new GameController();

game.player.placeShipsRandomly(game.playerBoard);
game.computer.placeShipsRandomly(game.computerBoard);

renderBoards(game);
