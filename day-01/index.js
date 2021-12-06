const fs = require('fs');

const str = fs.readFileSync('input.txt', 'utf-8').toString();
const array = str.split('\n').map(numStr => Number(numStr));

let count = 0;
for(let i = 1; i < array.length; i++) {
  const previousNum = array[i-1];
  const num = array[i];
  if (num > previousNum) {
    count++;
  }
}

console.log('Solution 1', count);

count = 0;
let previousSum;
for(let i = 2; i < array.length; i++) {
  let sum = array[i-2] + array[i-1] + array[i];
  if (!previousSum) {
    previousSum = sum;
    continue;
  }
  if (sum > previousSum) {
    count++;
  }
  previousSum = sum;
}

console.log('Solution 2', count);
