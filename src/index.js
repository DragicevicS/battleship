import './style.css';
import { shipList, displayShipList } from './ship';
import { createGrid, placeOpponentShip, placePlayerShip, receiveAttack } from './game';


const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

createGrid(playerGrid, 10);
displayShipList(playerShips, shipList);
createGrid(opponentGrid, 10);
displayShipList(opponentShips, shipList);

placePlayerShip(shipList[1], 2, 3, 'v');
placePlayerShip(shipList[0], 0, 0, 'h');
placePlayerShip(shipList[2], 8, 2, 'h');
placePlayerShip(shipList[3], 5, 7, 'v');
placePlayerShip(shipList[4], 3, 7, 'h');

placeOpponentShip(shipList[1], 2, 3, 'v');
placeOpponentShip(shipList[0], 0, 0, 'h');
placeOpponentShip(shipList[2], 8, 2, 'h');
placeOpponentShip(shipList[3], 5, 7, 'v');
placeOpponentShip(shipList[4], 3, 7, 'h');

playerGrid.addEventListener('click', (e) => {
  let coords = e.target.id.split(',');
  receiveAttack(playerGrid, coords[0], coords[1]);
});

opponentGrid.addEventListener('click', (e) => {
  let coords = e.target.id.split(',');
  receiveAttack(opponentGrid, coords[0], coords[1]);
});

console.log(shipList[1]);