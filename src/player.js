const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');

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
}

