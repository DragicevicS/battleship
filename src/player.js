import { createGrid, placePlayerShip, opponentAttackHandler, receiveAttack } from "./grid";
import { p_shipList } from "./ship";

const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');

export const players = ['Player', 'AI overlord']; // define player names

export let activePlayer = players[0];

export const switchPlayer = () => { // switch player on end of the turn
  if (activePlayer === players[0]) {
    opponentGrid.removeEventListener('click', opponentAttackHandler);
    playerGrid.style.opacity = '1';
    opponentGrid.style.opacity = '0.5';
    activePlayer = players[1];
    setTimeout(() => {
      AIattack();
    }, 500);
  } else {
    opponentGrid.addEventListener('click', opponentAttackHandler);
    opponentGrid.style.opacity = '1';
    playerGrid.style.opacity = '0.5';
    activePlayer = players[0];
  };
};

randomBtn.addEventListener('click', () => { // randomize player 1 ship placement
  playerGrid.textContent = '';
  createGrid(playerGrid, 10);
  for (let i=0; i < p_shipList.length; i++) {
    placePlayerShip(p_shipList[i]);
  };
});

startBtn.addEventListener('click', () => { // start the game removing buttons and adding an event listener for player one to make move
  randomBtn.style.visibility = 'hidden';
  startBtn.style.visibility = 'hidden';
  playerGrid.style.opacity = '0.5';
  opponentGrid.addEventListener('click', opponentAttackHandler); 
});

const AImoves = []; // array of AI moves

export const AIattack = function() { // make the AI choose a random, unselected cell
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let newMove = `${x},${y}`;
  if (AImoves.includes(newMove)) AIattack();
  else {
    AImoves.push(newMove);
    receiveAttack(playerGrid, x, y); // display move if it's a valid (unselected) cell
    console.log(newMove, AImoves);
  };
};



