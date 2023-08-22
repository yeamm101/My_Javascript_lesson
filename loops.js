// loops

const fruits = [
  "banana",
  "apple",
  "orange",
  "pean",
  "banana",
  "apple",
  "orange",
  "pean",
  "banana",
  "apple",
  "orange",
  "pean",
  "banana",
  "apple",
  "orange",
  "pean",
  "banana",
  "apple",
  "orange",
  "pean",
];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}
const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
};
console.log(double([1, 2, 3, 4, 5, 6]));

// for of loops   "of" represents the characters of a needed data
const square = (numbers) => {
  results = [];
  for (const number of numbers) {
    results.push(number ** 2);
  }
  return results;
};

console.log(square([1, 2, 3, 4, 5, 6]));
// suming all numbers in an array

// for in loops  in represents the index
const howManyLetters = (phrase) => {
  // counter
  let result = 0;
  for (index in phrase) {
    console.log(Number(index) + 1);
    result = Number(index) + 1;
  }

  return { result };
};

const phrase = prompt("What would you like to say?");
console.log(howManyLetters(phrase));
console.log(phrase.length);

// a function that sums up numbers in a certain array

const sumArray = (numbers) => {
  result = 0;
  // for loops
  for (const number of numbers) {
    console.log(number);
    result = result + number;
  }
  return { result };
};
const nums = [1, 2, 3, 4, 5];
console.log(sumArray(nums));

// Find the max number among the numbers in an array
const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }

  return { result };
};

numbs = [1, 2, 3, 4, 1, 7, 8, 8, 9, 10, 11, 23, 40, 23];
console.log(max(nums));

// Calculate letter frequency
const letter_frequency = (phrase) => {
  // we are gonna show how many times did a letter appear in a given word(s)
  console.log(phrase);
  // made a `frequency` object{}
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += frequency[letter];
    } else {
      frequency[letter] = 1;
    }
  }

  return frequency
};

// console.log(letter_frequency("how long have you been coding since college?"));

// // incremental operaters (they help to shorten +1 and -1)

// wordFrequency
const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letter_frequency(words)
}

console.log(wordFrequency('damn bro damn yo yoy yoy yoy yo yo yo'))