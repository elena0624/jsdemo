'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const playersEl = document.querySelectorAll('.player');

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  playersEl[0].classList.toggle('player--active');
  playersEl[1].classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// Starting condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // 代表p0
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  playersEl[0].classList.remove('player--winner');
  playersEl[1].classList.remove('player--winner');
  playersEl[0].classList.add('player--active');
  playersEl[1].classList.remove('player--active');
};
// function startingCondition() {
// display
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   playersEl[0].classList.remove('player--winner');
//   playersEl[1].classList.remove('player--winner');
//   playersEl[0].classList.add('player--active');
//   playersEl[1].classList.remove('player--active');

//   diceEl.classList.add('hidden');

//   scores[0] = 0;
//   scores[1] = 0;
//   currentScore = 0;
//   activePlayer = 0; // 代表p0

//   playing = true;
// }
// const rollDice = function () {
//   const result = Math.trunc(Math.random() * 6) + 1;
//   diceEl.src = 'dice-' + result + '.png';
//   return result;
// };

// function activeDisplay(activePlayer) {
//   if (activePlayer) {
//     playersEl[0].classList.remove('player--active');
//     playersEl[1].classList.add('player--active');
//   } else {
//     playersEl[1].classList.remove('player--active');
//     playersEl[0].classList.add('player--active');
//   }
// }
// Starting conditions
let scores, currentScore, activePlayer, playing;

init();
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0; // 代表p0

// Rolling dicefunctionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next player; else add current score
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      //   current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // if (!activePlayer) {
      //   current0El.textContent = currentScore;
      // } else {
      //   current1El.textContent = currentScore;
      // }
    } else {
      // siwtch to next player
      switchPlayer();
      // currentScore = 0;
      // document.getElementById(`current--${activePlayer}`).textContent =
      //   currentScore;
      // playersEl[0].classList.toggle('player--active');
      // playersEl[1].classList.toggle('player--active');
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // current0El.textContent = 0;
      // current1El.textContent = 0;
      // display
      // activePlayer = !activePlayer;
      // activeDisplay(activePlayer);
    }
  }
});
// rollEl.addEventListener('click', rollDice);

// Holds dicefunctionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active playe's score
    //   document.getElementById(`score--${activePlayer}`).textContent =
    // Number(document.getElementById(`score--${activePlayer}`).textContent) +
    // currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >=100
    // Finish the game
    if (scores[activePlayer] >= 20) {
      playersEl[activePlayer].classList.remove('player--active');
      playersEl[activePlayer].classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      switchPlayer();
    }
    //   if (!activePlayer) {
    // score0El.textContent = Number(score0El.textContent) + currentScore;
    //   } else {
    // score1El.textContent = Number(score0El.textContent) + currentScore;
    //   }
    //   activePlayer = !activePlayer;
    //   activeDisplay(activePlayer);
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  }
});

// Reset function
// btnNew.addEventListener('click', function () {
// set all scores to 0
//   startingCondition();
// set active player as player1
//   init();
// });

// or like this
// Reset function
btnNew.addEventListener('click', init);
