const fs = require('fs');

{
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
}

{
  const fish = fs.readFileSync('./input.txt', 'utf-8').toString().split(',').map(numStr => Number(numStr));
  let counts = Array(9).fill().map(() => 0);
  fish.forEach(fishy => counts[fishy] += 1);

  for (let i = 0; i < 256; i++) {
    const newCounts = Array(9).fill().map(() => 0); 
    newCounts[6] = counts[0];
    newCounts[8] = counts[0];
    for(let j = 0; j < 9; j++) {
      newCounts[j-1] += counts[j];
    }
    counts = newCounts;
  }
  console.log('Solution 2', counts.reduce((x, y) => x + y));
}