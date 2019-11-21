const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const fisherYatesShuffle = (numbers) => {
  for (let i = numbers.length - 1; i > 0; i--) {
    let randomNum = Math.floor(Math.random() * i) + 1;

    let tempNum = numbers[i];
    // 8
    numbers[i] = numbers[randomNum];
    // swap numbers iteratable w/ random number
    numbers[randomNum] = tempNum;
    // swap random number with tempNum which was the last iterable in numbers array
  }

  return numbers;
};

let shuffleNums = fisherYatesShuffle(numbers);
console.log(shuffleNums);