const fs = require('fs');

const positions = fs.readFileSync('./input.txt', 'utf-8').toString().split(',')
  .map(numStr => Number(numStr))
  .sort((a, b) => a - b);

const mid = positions[positions.length / 2];

let total = 0;
for (let i = 0; i < positions.length; i++) {
  total += Math.abs(mid - positions[i]);
}

console.log('Solution 1', total);