import { createGrid, placePlayerShip, placeOpponentShip } from './game';
import { shipList } from './ship';

describe('Ships', () => {
  test('hit()', () => {
    expect(destroyer.hit()).not.toEqual(0);
  });

  test('ship length', () => {
    expect(battleship.length).toEqual(4);
  });

  test('isSunk()', () => {
    patrolBoat.hit();
    patrolBoat.hit();
    expect(patrolBoat.isSunk()).toBeTruthy();
    expect(submarine.isSunk()).toBeFalsy();
  });
});

describe('Game', () => {
  const playerGrid = createGrid();

  test('placeShip()', () => {
    placeShip(playerGrid, carrier, 0, 0, 'h');
    expect(playerGrid[0][0]).toBe(carrier);
    expect(playerGrid[0][1]).toBe(carrier);
    expect(playerGrid[0][2]).toBe(carrier);
    expect(playerGrid[0][3]).toBe(carrier);
    expect(playerGrid[0][4]).toBe(carrier);
    expect(playerGrid[0][5]).toBe('');
    expect(playerGrid[1][0]).toBe('');
  });
});

