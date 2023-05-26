import './style.css';
import { p_shipList, o_shipList, displayShipList } from './ship';
import { createGrid, placeOpponentShip, placePlayerShip, receiveAttack } from './game';


const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

createGrid(playerGrid, 10);
displayShipList(playerShips, p_shipList);
createGrid(opponentGrid, 10);
displayShipList(opponentShips, o_shipList);

placePlayerShip(p_shipList[1], 2, 3, 'v');
placePlayerShip(p_shipList[0], 0, 0, 'h');
placePlayerShip(p_shipList[2], 8, 2, 'h');
placePlayerShip(p_shipList[3], 5, 7, 'v');
placePlayerShip(p_shipList[4], 3, 7, 'h');

placeOpponentShip(o_shipList[1], 2, 3, 'v');
placeOpponentShip(o_shipList[0], 0, 0, 'h');
placeOpponentShip(o_shipList[2], 8, 2, 'h');
placeOpponentShip(o_shipList[3], 5, 7, 'v');
placeOpponentShip(o_shipList[4], 3, 7, 'h');

playerGrid.addEventListener('click', (e) => {
  let coords = e.target.id.split(',');
  receiveAttack(playerGrid, coords[0], coords[1]);
});

opponentGrid.addEventListener('click', (e) => {
  let coords = e.target.id.split(',');
  receiveAttack(opponentGrid, coords[0], coords[1]);
});
