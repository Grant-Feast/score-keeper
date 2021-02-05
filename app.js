const playerOne = document.querySelector('#p1button');
const playerTwo = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// Listen for a click from the user and update the score for player one.
playerOne.addEventListener('click', function () {
  // If the games is not over, keep incrementing the score.
    if(!isGameOver) {
      p1Score += 1;
      // If player ones score and the winning score match the game is over and incrementation is stoped.
      if(p1Score === winningScore) {
        isGameOver = true;
        // Displays each players points in either green or red depending who has won.
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        // Disable buttons once a player has won.
        playerOne.disabled = true;
        playerTwo.disabled = true;
      }
      // Change the display of the left span to player ones score.
      p1Display.textContent = p1Score;
    }
})

playerTwo.addEventListener('click', function () {
  if(!isGameOver) {
    p2Score += 1;
    if(p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      playerOne.disabled = true;
      playerTwo.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
})

// Add an event listener to check when there is a change in the select and then reset the game.
playTo.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  resetGame();
})

// Add an event listener to the reset button passing in the resetGame function but not calling it.
reset.addEventListener('click', resetGame);

// Function to reset the game entirely.
function resetGame() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  playerOne.disabled = false;
  playerTwo.disabled = false;
}