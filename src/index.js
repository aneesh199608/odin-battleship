import './styles.css';
import GameController from './GameController.js';
import { renderBoards } from './dom.js';
import Ship from './Ship.js';

const game = new GameController(renderBoards); // Pass renderBoards to constructor

game.player.placeShipsRandomly(game.playerBoard);
game.computer.placeShipsRandomly(game.computerBoard);

renderBoards(game);
