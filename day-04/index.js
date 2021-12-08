const fs = require('fs');

let [drawnNumbers, ...boards] = fs.readFileSync('./input.txt', 'utf-8').toString().split('\n\n');
boards = boards.map(board =>
  board.split('\n')
    .map(line =>
      line.trim().split(/\s+/).map(numStr => ({ val: Number(numStr), isChecked: false }))
    )
);
drawnNumbers = drawnNumbers.split(',').map(numStr => Number(numStr));

const printWinnerScore = (winner, drawn, solutionNum) => {
  const unchecked = winner.flatMap((line) => line.filter((num) => !num.isChecked)).map((num) => num.val)
  const sumUnchecked = unchecked.reduce((a, b) => a + b);
  const score = drawn * sumUnchecked;
  console.log('Solution', solutionNum, score);
};

let winners = new Set();
let hasFirstWinner = false;
let hasLastWinner = false;
drawnNumbers.forEach(drawn => {
  boards.forEach(board => {
    let columnChecks = {};
    board.forEach(line => {
      let linesChecked = 0;
      line.forEach((num, columnIndex) => {
        if (!num.isChecked) num.isChecked = num.val === drawn;
        if (num.isChecked) {
          linesChecked++;
          columnChecks[columnIndex] = (columnChecks[columnIndex] || 0) + 1;
        }
        if (linesChecked >= line.length) winners.add(board);
      });
      if (Object.values(columnChecks).some(val => val >= board.length)) {
        winners.add(board);
      }
    });
  });

  if (winners.size === 1 && !hasFirstWinner) {
    hasFirstWinner = true;
    printWinnerScore([...winners][0], drawn, '1');
  }
  if (winners.size === boards.length && !hasLastWinner) {
    hasLastWinner = true;
    printWinnerScore([...winners][winners.size - 1], drawn, '2');
  }
})