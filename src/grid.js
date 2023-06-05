import { p_shipList, o_shipList } from "./ship";
import { AIattack, players, switchPlayer } from "./player";

const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const shipSizes = document.getElementsByClassName('p_ship-block');
const p_totalHits = playerGrid.getElementsByClassName('hit');
const o_totalHits = opponentGrid.getElementsByClassName('hit');

export const createGrid = (grid, size) => { // create a grid (size x size)
  for (let i=0; i < size; i++) {
    let gridRow = document.createElement('tr');
    grid.appendChild(gridRow);
    for (let j=0; j < size; j++) {
      let cell = document.createElement('td');
      grid.children[i].appendChild(cell);
      cell.classList = 'empty'
      // set an unique id for each cell depending on which grid it's placed
      if (grid === playerGrid) cell.setAttribute('id', `${i},${j},p`);
      if (grid === opponentGrid) cell.setAttribute('id', `${i},${j},o`);
    };
  };

  return grid;
};

export const placePlayerShip = (ship) => { // places player ships on player grid at random coords
  let empty = true;
  let rotation = Math.random() < 0.5 ? 'h' : 'v';
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let td = document.getElementById(`${x},${y},p`);
  // checks if the random selected cell is empty and if the rest of the cell empty, depending on the ship's length and rotation
  if (td.classList.contains('empty')) {
    if (rotation === 'h') {
      for (let i=0; i < ship.length; i++) {
        if (y + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x},${y + i},p`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placePlayerShip(ship);
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x},${y + i},p`).classList.remove('empty');
          document.getElementById(`${x},${y + i},p`).classList.add('ship', `${ship.name}`);
          ship.playerCoords.push([x, y + i]);
        };
      };
    };
    if (rotation === 'v') {
      for (let i=0; i < ship.length; i++) {
        if (x + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x + i},${y},p`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placePlayerShip(ship); // if it's not a valid position, try again in a different place
      if (empty === true) { // if it's a valid position, place ship
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x + i},${y},p`).classList.remove('empty');
          document.getElementById(`${x + i},${y},p`).classList.add('ship', `${ship.name}`);
          ship.playerCoords.push([x + i, y]);
        };
      };
    };
  } else placePlayerShip(ship); // if the selected cell is not empty, try again in a different place
};

export const placeOpponentShip = (ship) => { // same as the placePlayerShip function, but uses a ships and coords for the opponent's grid
  let empty = true;
  let rotation = Math.random() < 0.5 ? 'h' : 'v';
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let td = document.getElementById(`${x},${y},o`);
  if (td.classList.contains('empty')) {
    if (rotation === 'h') {
      for (let i=0; i < ship.length; i++) {
        if (y + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x},${y + i},o`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placeOpponentShip(ship);
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x},${y + i},o`).classList.remove('empty');
          document.getElementById(`${x},${y + i},o`).classList.add('ship', `${ship.name}`, 'hidden');
          ship.opponentCoords.push([x, y + i]);
        };
      };
    };
    if (rotation === 'v') {
      for (let i=0; i < ship.length; i++) {
        if (x + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x + i},${y},o`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placeOpponentShip(ship);
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x + i},${y},o`).classList.remove('empty');
          document.getElementById(`${x + i},${y},o`).classList.add('ship', `${ship.name}`, 'hidden');
          ship.opponentCoords.push([x + i, y]);
        };
      };
    };
  } else placeOpponentShip(ship);
};

export const receiveAttack = (grid, x, y) => { // display attack on grids if a valid cell is selected
  let td;
  if (grid === playerGrid) {
    td = document.getElementById(`${x},${y},p`);
    if (td.classList.contains('empty')) {
      td.innerHTML = `&#8226;`;
      td.classList.replace('empty', 'miss');
      td.classList.remove('hidden');
      switchPlayer();
      // event listener swapping if 2 players are playing, instead of player vs AI
      // grid.removeEventListener('click', playerAttackHandler);
      // opponentGrid.addEventListener('click', opponentAttackHandler);
    }
    else if (td.classList.contains('ship')) {
      td.classList.replace('ship', 'hit');
      td.classList.remove('hidden');
      for (let i=0; i < p_shipList.length; i++) {
        for (let j=0; j < p_shipList[i].playerCoords.length; j++) {
          if (JSON.stringify(p_shipList[i].playerCoords[j]) == JSON.stringify([parseInt(x), parseInt(y)])) {
            p_shipList[i].hit();
            checkShipStatus(playerGrid, p_shipList[i]);
            setTimeout(() => { // if the AI makes a hit, it does another move until it misses
              AIattack();
            }, 500);
          };
        };
      };
    };
  };
  if (grid === opponentGrid) {
    td = document.getElementById(`${x},${y},o`);
    if (td.classList.contains('empty')) {
      td.innerHTML = `&#8226;`;
      td.classList.replace('empty', 'miss');
      td.classList.remove('hidden');
      switchPlayer();
      // event listener swapping if 2 players are playing, instead of player vs AI
      // grid.removeEventListener('click', opponentAttackHandler);
      // playerGrid.addEventListener('click', playerAttackHandler);
    }
    else if (td.classList.contains('ship')) {
      td.classList.replace('ship', 'hit');
      td.classList.remove('hidden');
      for (let i=0; i < o_shipList.length; i++) {
        for (let j=0; j < o_shipList[i].opponentCoords.length; j++) {
          if (JSON.stringify(o_shipList[i].opponentCoords[j]) == JSON.stringify([parseInt(x), parseInt(y)])) {
            o_shipList[i].hit();
            checkShipStatus(opponentGrid, o_shipList[i]);
          };
        };
      };
    };
  };
};

const checkShipStatus = (grid, ship) => { // checks if the current ship being hit is destroyed, updates the ship list if it is and also checks if all ships are destroyed
  if (grid === playerGrid) if (ship.isSunk()) {
      const shipListDisplay = document.getElementsByClassName(`p_ship-block ${ship.name}`);
      for (let i=0; i < shipListDisplay.length; i++) {
        shipListDisplay[i].style.backgroundColor = '#ff4d4d';
      };
      if (p_totalHits.length === shipSizes.length) setTimeout(() => { alert(`${players[1]} won!`); location.reload(); }, 100);
    };

  if (grid === opponentGrid) if (ship.isSunk()) {
    const shipListDisplay = document.getElementsByClassName(`o_ship-block ${ship.name}`);
      for (let i=0; i < shipListDisplay.length; i++) {
        shipListDisplay[i].style.backgroundColor = '#ff4d4d';
      };
      if (o_totalHits.length === shipSizes.length) setTimeout(() => { alert(`${players[0]} won!`); location.reload(); } , 100);
  };
};

function playerAttackHandler(event) { // handler function for the player's grid event listener
  let e = event;
  if (e.target !== playerGrid) {
    let coords = e.target.id.split(',');
    receiveAttack(playerGrid, coords[0], coords[1]);
  };
};

export function opponentAttackHandler(event) { // handler function for the opponent's grid event listener
  let e = event;
  if (e.target !== opponentGrid) {
    let coords = e.target.id.split(',');
    receiveAttack(opponentGrid, coords[0], coords[1]);
  };
};