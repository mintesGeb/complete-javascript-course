'use strict';

// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'Correct Number!😁';
// // console.log(document.querySelector('.message').textContent);

// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 46;

// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     displayMessage('No Number !');

//     //when player wins
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number!😁');

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;
//     if (highscore < score) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       //   guess > secretNumber ? 'Too high!😁' : 'Too low!😁';
//       displayMessage(guess > secretNumber ? 'Too high!😁' : 'Too low!😁');

//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = 'You Lost😁';
//       displayMessage('You Lost😁');
//       document.querySelector('body').style.backgroundColor = 'red';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.number').textContent = secretNumber;
//     }
//   }

//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Too high!😁';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You Lost😁';
//   //     document.querySelector('body').style.backgroundColor = 'red';
//   //     document.querySelector('.score').textContent = 0;
//   //     document.querySelector('.number').textContent = secretNumber;
//   //   }
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Too low!😁';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You Lost😁';
//   //     document.querySelector('body').style.backgroundColor = 'red';
//   //     document.querySelector('.score').textContent = 0;
//   //     document.querySelector('.number').textContent = secretNumber;
//   //   }
//   // }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.guess').value = '';
//   // document.querySelector('.highscore').textContent = 20;
// });

// console.log((document.querySelector('.message').textContent = 'I love you'));

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.guess').value = 56;

// document.querySelector('.number').textContent = 45;
// document.querySelector('.score').textContent = 43;

// document.querySelector('.guess').value = 54;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Congratulations!';
    displayMessage('Congratulations!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';

      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost';
      displayMessage('You Lost');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.addEventListener("keydown", function(e){
  console.log(e.key);
})
