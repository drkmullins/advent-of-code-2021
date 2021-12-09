const fs = require('fs');

let coordEdges = fs.readFileSync('./input.txt', 'utf-8').toString().split('\n')
  .map(line =>
    line.split(' -> ').map(coordinates =>
      coordinates.split(',').map(num => Number(num))
    )
  ).filter(([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2); // remove diagonals

let hits = {};
coordEdges.forEach(([[x1, y1], [x2, y2]]) => {
  if (x1 === x2) {
    const begin = y1 < y2 ? y1 : y2;
    const size = Math.abs(y1 - y2) + 1;
    for (let i = 0; i < size; i++) {
      hits[`${x1},${begin+i}`] = (hits[`${x1},${begin+i}`] || 0) + 1; 
    }
  }
  else {
    const begin = x1 < x2 ? x1 : x2;
    const size = Math.abs(x1 - x2) + 1;
    for (let i = 0; i < size; i++) {
      hits[`${begin+i},${y1}`] = (hits[`${begin+i},${y1}`] || 0) + 1;
    }    
  }
});

const multipleHitCount = Object.values(hits).filter(val => val > 1).length

console.log('Solution 1', multipleHitCount);