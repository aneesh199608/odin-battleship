import './styles.css';
import GameController from './GameController.js';
import { renderBoards } from './dom.js';

const game = new GameController({
  renderBoards,
  showFeedback: (msg) => {
    const el = document.getElementById('feedback-indicator');
    if (el) el.textContent = msg;
  },
  showSunkMessage: (ship, owner) => {
    const el = document.getElementById('feedback-indicator');
    if (!el) return;
    el.textContent =
      owner === 'player'
        ? `The computer sunk your ${ship.name}! 💀`
        : `You sunk the computer's ${ship.name}! 🚢🔥`;
  },
  showGameOver: (winner) => {
    alert(`Game Over! ${winner} wins!`);
  },
});

