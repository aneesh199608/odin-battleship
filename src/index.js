import './styles.css';
import GameController from './GameController.js';
import { renderBoards } from './dom.js';

const game = new GameController(renderBoards); // Pass renderBoards to constructor

game.player.placeShipsRandomly(game.playerBoard, 'Player');
game.computer.placeShipsRandomly(game.computerBoard, 'Computer');

renderBoards(game);
