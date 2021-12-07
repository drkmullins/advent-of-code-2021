const fs = require('fs');

const str = fs.readFileSync('./input.txt', 'utf-8').toString();
const pairs = str.split('\n').map(instruction => instruction.split(' '));

let horizontalPosition = 0;
let depth = 0;

for (let i = 0; i < pairs.length; i++) {
  const [ command, unit ] = pairs[i];
  if (command === 'forward') horizontalPosition += Number(unit);
  if (command === 'up') depth -= Number(unit);
  if (command === 'down') depth += Number(unit);
}

const solution1 = horizontalPosition * depth;
console.log('Solution 1', solution1);

let aim = 0;
horizontalPosition = 0;
depth = 0;

for (let i = 0; i < pairs.length; i++) {
  const [ command, unit ] = pairs[i];
  if (command === 'forward') {
    horizontalPosition += Number(unit);
    depth += (aim * Number(unit))
  }
  if (command === 'up') aim -= Number(unit);
  if (command === 'down') aim += Number(unit);
}

const solution2 = horizontalPosition * depth;
console.log('Solution 2', solution2);