const fs = require('fs');

const str = fs.readFileSync('./input.txt', 'utf-8').toString();
const arrays = str.split('\n').map(diagnostic => diagnostic.split(''));

let gamma = [];
let epsilon = [];

for (let i = 0; i < arrays[0].length; i++) {
  let counter = 0;
  for (let j = 0; j < arrays.length; j++) {
    counter += Number(arrays[j][i]);
  }
  gamma[i] = counter > arrays.length / 2 ? 1 : 0;
  epsilon[i] = counter > arrays.length / 2 ? 0 : 1;
}

gamma = parseInt(gamma.join(''), 2)
epsilon = parseInt(epsilon.join(''), 2)

console.log('Solution 1', gamma * epsilon);