'use strict';

console.log('funguju!');

const form = document.querySelector('.controls');
const seconds = document.querySelector('.alarm__seconds');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('button').disabled = true;
  const inputData = document.querySelector('.time-input');
  let time = inputData.value;
  const intervalId = setInterval(() => {
    time = time - 1;
    if (time === 0) {
      clearInterval(intervalId);
    }
    seconds.textContent = time;
  }, 1000);
});
