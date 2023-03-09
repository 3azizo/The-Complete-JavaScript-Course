'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const dismessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    dismessage('no number🚫');
  } else if (guess === num) {
    dismessage('correct number🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== num) {
    if (score > 1) {
      dismessage(guess > num ? 'too hight!' : 'too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dismessage('you lost the game');
      document.querySelector('.score').textContent = '0';
    }
  }
  // else if (guess > num) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too hight!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // } else if (guess < num) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  dismessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
