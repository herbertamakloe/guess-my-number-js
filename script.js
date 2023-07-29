'use strict';

////
////
////
////
////
/////WHAT IS DOM AND DOM MANIPULATION
/* 
DOM: Document Object Model, and it is basically a structured representation
of HTML documents. The DOM allows us to use HTML document and styles in 
order to manipulate them. 

So we can say that the DOM is basically a connection between HTML document 
and JavaScript code. 

Now the DOM automatically created by the browser as soon as the HTML page 
loads and it's stored in a tree-like structure. In the tree, each HTML
element is one object. 

//NOTE FOR MYSELF
So basically when we say objected oriented programming language, what we
mean by that is JavaScript is a langauge relies heavily on objects. Using
the web as an environment for example, we use JS to access the DOM; the
DOM is a place that contains objects. So we use JS to manipulate these
objects.

The DOM and DOM methods are part of something called Web APIs. So the 
Web APIs are like libraries that browsers implement that we can access
from our JS code. (API: Application Programming Interface)

Web APIs are basically libraries that are also written in JS and that
are automatically available for us to use. All these happen behind the
scene

*/

// document.querySelector('.guess') = 10;
// console.log(document.querySelector('.guess').textContent);

// const secretNumber = document.querySelector('.number');
// secretNumber.textContent = 13;
// const score = document.querySelector('.score');
// score.textContent = 103;

// const checkBtn = document.querySelector('.check');
// const guessedNumber = document.querySelector('.guess').value;
// //We use the value property to get data fom inputs

// document.querySelector('.guess').value = 200;
// let randomNumber;
// document.querySelector('.message').textContent = 'Herbert Tamakloe';

// checkBtn.addEventListener('click', checkFunc);

// function checkFunc() {
//   console.log(guessedNumber);
// }

// function randomFunc() {
//   return (randomNumber = Math.trunc(Math.random() * 2 + 1));
// }

// randomFunc();

///
///
///
///

// let randomNumber = Math.trunc(Math.random() * 3) + 1;

// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guessedNumber = Number(document.querySelector('.guess').value);
//   console.log(guessedNumber);

//   //When there is no input
//   if (!guessedNumber || guessedNumber == 0) {
//     document.querySelector('.message').textContent = 'No number! ⚠ or 0';
//   }
//   //When player WINS
//   else if (guessedNumber === randomNumber) {
//     console.log('You guessed right!');

//     document.querySelector('.number').textContent = randomNumber;

//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   }
//   //When guess is too high
//   else if (guessedNumber > randomNumber) {
//     if (score > 1) {
//       //I don't understand - I get it now
//       /* It's really not about what's in the if statement but what happens within that
//       statement block. We are telling the code below to run AFTER it has checked if
//       score is greater than zero(say score > 0). Now this code will run (score--)
//       which will decrease the value of score until it gets to zero and update it
//       in the DOM. But the reason why you have to click twice before the code in
//       the else statement is executed is because the first click updates, the
//       second click is the one that now check/compares if the score > 0. So in
//       order to reduce the number of clicks just change the condition to score > 1.
//       So that when it gets to 1 we can click again can run the else block of code.*/
//       document.querySelector('.message').textContent = '📈 Number Too High!';
//       score--;
//       // console.log('Current score is:' + score);
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //When guess is too low
//   else if (guessedNumber < randomNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Number Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else {
//     console.log('Wrong guess');
//   }
// });

// document.querySelector('.again').addEventListener('click', resetFunc);

// function resetFunc(){
//   score = 20;
//   randomNumber = Math.trunc(Math.random() * 3) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;

//   document.querySelector('.highscore').textContent = highScore;
// }

// function scoreHighLow (){

// }

//REFACTORED CODE
let randomNumber = Math.trunc(Math.random() * 3) + 1;

let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const messageText = document.querySelector('.message');
const randomNumberDisplay = document.querySelector('.number');
const highScoreText = document.querySelector('.highscore');
const scoreText = document.querySelector('.score');

//When Check Button is clicked
checkBtn.addEventListener('click', function () {
  const guessedNumber = Number(guessInput.value);

  //When there is no input
  if (!guessedNumber || guessedNumber == 0) {
    // messageText.textContent = 'No number! ⚠ or 0';
    displayMessage('No number! ⚠ or 0');
  }
  //When player WINS
  else if (guessedNumber === randomNumber) {
    // console.log('You guessed right!');

    randomNumberDisplay.textContent = randomNumber;

    // messageText.textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    randomNumberDisplay.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  }
  //WHEN GUESS IS WRONG
  else if (guessedNumber !== randomNumber) {
    if (score > 1) {
      messageText.textContent =
        guessedNumber > randomNumber
          ? '📈 Number Too High!'
          : '📉 Number Too Low!';
      score--;
      scoreText.textContent = score;
    } else {
      // messageText.textContent = '😭 You lost the game!';
      displayMessage('😭 You lost the game!');
      scoreText.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', resetFunc);

//Function to display message
function displayMessage(message) {
  messageText.textContent = message;
}

//Function to reset game
function resetFunc() {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 3) + 1;
  messageText.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  randomNumberDisplay.style.width = '15rem';
  guessInput.value = '';
  randomNumberDisplay.textContent = '?';
  scoreText.textContent = score;

  // highScoreText.textContent = highScore;
}
