import './style.css';
import { p_shipList, o_shipList, displayShipList } from './ship';
import { createGrid, placeOpponentShip, placePlayerShip } from './grid';

const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

createGrid(playerGrid, 10);
displayShipList(playerShips, p_shipList);
createGrid(opponentGrid, 10);
displayShipList(opponentShips, o_shipList);

for (let i=0; i < p_shipList.length; i++) {
  placePlayerShip(p_shipList[i]);
  placeOpponentShip(o_shipList[i]);
};