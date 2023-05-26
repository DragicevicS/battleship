const shipFactory = (length, name) => {
  let numOfHits = 0;
  let playerCoords = [];
  let opponentCoords = [];
  const hit = () => numOfHits += 1;
  const isSunk = () => numOfHits === length ? true : false;
  return { numOfHits, playerCoords, opponentCoords, length, name, hit, isSunk};
};

const p_carrier = shipFactory(5, 'Carrier');
const p_battleship = shipFactory(4, 'Battleship');
const p_destroyer = shipFactory(3, 'Destroyer');
const p_submarine = shipFactory(3, 'Submarine');
const p_patrolBoat = shipFactory(2, 'Patrol-boat');

const o_carrier = shipFactory(5, 'Carrier');
const o_battleship = shipFactory(4, 'Battleship');
const o_destroyer = shipFactory(3, 'Destroyer');
const o_submarine = shipFactory(3, 'Submarine');
const o_patrolBoat = shipFactory(2, 'Patrol-boat');
// const one = shipFactory(1, 'One block boat')

export const p_shipList = [p_carrier, p_battleship, p_destroyer, p_submarine, p_patrolBoat];

export const o_shipList = [o_carrier, o_battleship, o_destroyer, o_submarine, o_patrolBoat];

const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

export const displayShipList = (player, list) => {
  let shipInfo = document.createElement('div');

  for (let i=0; i < list.length; i++) {
    let shipStatus = document.createElement('div');
    shipStatus.className = 'ship-status';
    let shipName = document.createElement('div');
    shipName.className = 'ship-name';
    let shipSize = document.createElement('div');
    shipSize.className = 'ship-size';

    let listP = document.createElement('p');
    listP.textContent = `${list[i].name}:`;

    shipName.appendChild(listP);

    for (let j=0; j < list[i].length; j++) {
      let shipBlock = document.createElement('div');
      if (player == playerShips) shipBlock.classList = `p_ship-block ${list[i].name}`;
      if (player == opponentShips) shipBlock.classList = `o_ship-block ${list[i].name}`;
      shipSize.appendChild(shipBlock);
    };

    shipStatus.appendChild(shipName);
    shipStatus.appendChild(shipSize);
    
    shipInfo.appendChild(shipStatus)
  };

  player.appendChild(shipInfo);
};