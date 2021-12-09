const fs = require('fs');

const fish = fs.readFileSync('./input.txt', 'utf-8').toString().split(',').map(numStr => Number(numStr));

for (let i = 0; i < 80; i++) {
  const newFish = [];
  for(let j = 0; j < fish.length; j++) {
    if (fish[j] === 0) {
      newFish.push(8);
      fish[j] = 6;
    } else {
      fish[j] -= 1;
    }
  }
  fish.push(...newFish);
}

console.log('Solution 1', fish.length);