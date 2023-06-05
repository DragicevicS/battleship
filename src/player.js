import { createGrid, placePlayerShip, opponentAttackHandler } from "./grid";
import { p_shipList } from "./ship";

const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');

export const players = ['Player', 'AI overlord'];

export let activePlayer = players[0];

export const switchPlayer = () => {
  if (activePlayer === players[0]) {
    playerGrid.style.opacity = '1';
    opponentGrid.style.opacity = '0.5';
    activePlayer = players[1];
  } else {
    opponentGrid.style.opacity = '1';
    playerGrid.style.opacity = '0.5';
    activePlayer = players[0];
  };
};

randomBtn.addEventListener('click', () => {
  playerGrid.textContent = '';
  createGrid(playerGrid, 10);
  for (let i=0; i < p_shipList.length; i++) {
    placePlayerShip(p_shipList[i]);
  };
});

startBtn.addEventListener('click', () => {
  randomBtn.style.visibility = 'hidden';
  startBtn.style.visibility = 'hidden';
  playerGrid.style.opacity = '0.5';
  opponentGrid.addEventListener('click', opponentAttackHandler); 
});




