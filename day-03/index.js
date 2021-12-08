const fs = require('fs');

const str = fs.readFileSync('./input.txt', 'utf-8').toString();
const array = str.split('\n');

let gamma = [];
let epsilon = [];

for (let i = 0; i < array[0].length; i++) {
  let counter = 0;
  for (let j = 0; j < array.length; j++) {
    counter += Number(array[j][i]);
  }
  gamma[i] = counter > array.length / 2 ? 1 : 0;
  epsilon[i] = counter > array.length / 2 ? 0 : 1;
}

gamma = parseInt(gamma.join(''), 2);
epsilon = parseInt(epsilon.join(''), 2);

console.log('Solution 1', gamma * epsilon);

const getRating = (thisArray, currentPosition, preferredBit, nonPreferredBit) => {
  const comparator = thisArray.reduce((accum, num) => accum += num[currentPosition] === '1' ? 1 : -1, 0);
  const bitToKeep = comparator >= 0 ? preferredBit : nonPreferredBit;
  console.log('bitToKeep', bitToKeep);
  const nextArray = thisArray.filter(num => num[currentPosition] === bitToKeep);
  console.log('nextArray.length', nextArray.length);
  if (nextArray.length === 1) return parseInt(nextArray[0], 2);
  return getRating(nextArray, ++currentPosition, preferredBit, nonPreferredBit);
};

console.log('Solution 2', getRating(array, 0, '1', '0') * getRating(array, 0, '0', '1'));