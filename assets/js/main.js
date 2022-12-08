const btnNewGame = document.querySelector(`.newGame`);
const playerOneGlobalScore = document.querySelector(`.playerOneGlobalScore`);
const playerTwoGlobalScore = document.querySelector(`.playerTwoGlobalScore`);
const playerOneCurrentScore = document.querySelector(`.playerOneCurrentScors`);
const playerTwoCurrentScore = document.querySelector(`.playerTwoCurrentScors`);
const playerOneFinalScore = document.querySelector(`.playerOneFinalScore`);
const playerTwoFinalScore = document.querySelector(`.playerTwoFinalScore`);
const btnRoll = document.querySelector(`.roll`);
const btnHold = document.querySelector(`.hold`);
const dice = document.querySelector(`.dice`);
let zIndex = 0;
let playerOneTunr = true;
let newPlayerOneCurrentScore = 0;
let newPlayerTwoCurrentScore = 0;
let newFinalPlayerOneScore = 0;
let newFinalPlayerTwoScore = 0;

btnNewGame.addEventListener(`click`, reset);
btnRoll.addEventListener(`click`, newTurn);
btnHold.addEventListener(`click`, updatePlayerFinalScore);

function reset() {
  playerOneFinalScore.textContent = 0;
  playerTwoFinalScore.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  newFinalPlayerTwoScore = 0;
  newFinalPlayerTwoScore = 0;

  playerOneTunr = true;
  zIndex = 0

  alert("Nouvelle partie!");
}

function newTurn() {
  const diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  displayDice(diceNumber);
  if (playerOneTunr) {
    if (diceNumber == 1) {
      playerOneCurrentScore.textContent = 0;
      playerOneTunr = !playerOneTunr;
      newPlayerOneCurrentScore = 0;
    } else {
      newPlayerOneCurrentScore = newPlayerOneCurrentScore + diceNumber;
      playerOneCurrentScore.textContent = `${newPlayerOneCurrentScore}`;
    }
  } else if (!playerOneTunr) {
    if (diceNumber == 1) {
      playerTwoCurrentScore.textContent = 0;
      playerOneTunr = !playerOneTunr;
      newPlayerTwoCurrentScore = 0;
    } else {
      newPlayerTwoCurrentScore = newPlayerTwoCurrentScore + diceNumber;
      playerTwoCurrentScore.textContent = `${newPlayerTwoCurrentScore}`;
    }
  }

  function displayDice(diceNumber) {
    switch (diceNumber) {
      case 1:
        zIndex++;
        dice.src = `assets/img/faceOne.png`;
        dice.style.zIndex = `${zIndex}`;
        break;
      case 2:
        zIndex++;
        dice.src = `assets/img/faceTwo.png`;
        dice.style.zIndex = `${zIndex}`;
        break;
      case 3:
        zIndex++;
        dice.src = `assets/img/faceThree.png`;
        dice.style.zIndex = `${zIndex}`;
        break;
      case 4:
        zIndex++;
        dice.src = `assets/img/faceFor.png`;
        dice.style.zIndex = `${zIndex}`;
        break;
      case 5:
        zIndex++;
        dice.src = `assets/img/faceFive.png`;
        dice.style.zIndex = `${zIndex}`;
        break;
      case 6:
        zIndex++;
        dice.src = `assets/img/faceSix.png`;
        dice.style.zIndex = `${zIndex}`;
        break;
    }
  }
}

function updatePlayerFinalScore() {
  if (playerOneTunr) {
    newFinalPlayerOneScore = newFinalPlayerOneScore + newPlayerOneCurrentScore;
    playerOneFinalScore.textContent = `${newFinalPlayerOneScore}`;
    newPlayerOneCurrentScore = 0;

    playerOneCurrentScore.textContent = 0;
    if (newFinalPlayerOneScore >= 100) {
      winner(playerOneTunr, newFinalPlayerOneScore);
    }
    playerOneTunr = !playerOneTunr;
  } else {
    newFinalPlayerTwoScore = newFinalPlayerTwoScore + newPlayerTwoCurrentScore;
    playerTwoFinalScore.textContent = `${newFinalPlayerTwoScore}`;
    newPlayerTwoCurrentScore = 0;

    playerTwoCurrentScore.textContent = 0;
    if (newFinalPlayerTwoScore >= 100) {
      winner(playerOneTunr, newFinalPlayerTwoScore);
    }
    playerOneTunr = !playerOneTunr;
  }
}

function winner(player, score) {
  if (player) {
    alert(`félicitation joueur 1 gagne avec un total de ${score} points`);
  } else {
    alert(`félicitation joueur 2 gagne avec un total de ${score} points`);
  }
  reset();
}
