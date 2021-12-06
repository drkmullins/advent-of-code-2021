const fs = require('fs');

const str = fs.readFileSync('input.txt').toString();
const array = str.split('\n');

let lastSum = 0;
let count = 0;
let previous = -1;
let previousMinusOne = -1;
let previousMinusTwo = -1;

for(let i = 0; i < array.length; i++) {
  const num = Number(array[i]);
  if (previous < 0) {
    previous = num;
    continue;
  }
  else if (previousMinusOne < 0) {
    previousMinusOne = num;
    continue;
  }
  else if (previousMinusTwo < 0) {
    previousMinusTwo = num;
    continue;
  }
  const newSum = previous + previousMinusOne + previousMinusTwo;
  if (newSum > lastSum) {
    count ++;
  }
  lastSum = newSum;
}

console.log(count);
