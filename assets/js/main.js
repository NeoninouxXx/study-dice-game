const btnNewGame = document.querySelector(`.newGame`);
const playerOneGlobalScore = document.querySelector(`.playerOneGlobalScore`);
const playerTwoGlobalScore = document.querySelector(`.playerTwoGlobalScore`);
const playerOneCurrentScore = document.querySelector(`.playerOneCurrentScors`);
const playerTwoCurrentScore = document.querySelector(`.playerTwoCurrentScors`);

btnNewGame.addEventListener(`click`, reset);

function reset() {
  playerOneGlobalScore.innerHTML = `<p>0</p>`;
  playerTwoGlobalScore.innerHTML = `<p>0</p>`;
  playerOneCurrentScore.textContent = `0`;
  playerTwoCurrentScore.textContent = `0`;

  alert("Nouvelle partie!");
}
