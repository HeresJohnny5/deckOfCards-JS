const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const fisherYatesShuffle = (numbers) => {
  for (let i = numbers.length; i > 0; i--) {
    let tempNum = Math.floor(Math.random() * i) + 1;

    [numbers[i], tempNum] = [tempNum, numbers[i]];
  }

  return numbers;
};

let shuffleNums = fisherYatesShuffle(numbers);
console.log(shuffleNums);