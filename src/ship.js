const shipFactory = (length, name) => {
  let numOfHits = 0;
  let playerCoords = [];
  let opponentCoords = [];
  const hit = () => numOfHits += 1;
  const isSunk = () => numOfHits === length ? true : false;
  return { numOfHits, playerCoords, opponentCoords, length, name, hit, isSunk};
};

const carrier = shipFactory(5, 'Carrier');
const battleship = shipFactory(4, 'Battleship');
const destroyer = shipFactory(3, 'Destroyer');
const submarine = shipFactory(3, 'Submarine');
const patrolBoat = shipFactory(2, 'Patrol-boat');
// const one = shipFactory(1, 'One block boat')

export const shipList = [carrier, battleship, destroyer, submarine, patrolBoat];

export const displayShipList = (player, list) => {
  let shipNames = document.createElement('div');
  let shipSizes = document.createElement('div');
  
  for (let i=0; i < list.length; i++) {
    
    let listP = document.createElement('p');
    listP.textContent = `${list[i].name}:`;

    shipNames.appendChild(listP);

    let ship = document.createElement('div');
    for (let j=0; j < list[i].length; j++) {
      let shipBlock = document.createElement('div');
      ship.appendChild(shipBlock);
    };
    shipSizes.appendChild(ship);
  };

  player.appendChild(shipNames);
  player.appendChild(shipSizes);
};

export const checkShipStatus = (grid) => {

}