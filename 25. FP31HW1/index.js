const { access } = require("fs");

console.log("Program 1:")
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const longestWord = words.reduce(
  (acc, curr) => (curr.length > acc.length ? curr : acc),
  words[0],
);
console.log(longestWord);
console.log("\n---- ---- ----");
console.log("Program 2:")
const numbers = [10, 5, 8, 20, 15];
const minNum = numbers.reduce(
  (acc, curr) => (curr < acc ? curr : acc),
  numbers[0],
);
console.log(minNum);
console.log("\n---- ---- ----");
console.log("Program 3:")
const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];
const totalLengthOfAllStr = wordsLength.reduce(
  (acc, curr) => acc + curr.length,
  0,
);
console.log(totalLengthOfAllStr);
console.log("\n---- ---- ----");
console.log("Program 4:")
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countEvenNums = nums.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc += 1;
  }
  return acc;
}, 0);
console.log(countEvenNums);
console.log("\n---- ---- ----");
console.log("Program 5:")
const wordsCaps = ["hello", "world", "how", "are", "you"];
const concatStrWithFirstWordCap = wordsCaps
  .reduce(
    (acc, curr) => acc + curr.charAt(0).toUpperCase() + curr.slice(1) + " ",
    "",
  )
  .trim();
console.log(concatStrWithFirstWordCap);
console.log("\n---- ---- ----");
console.log("Program 6:")
const numsAvg = [10, 15, 20, 25, 30];
const sum = numsAvg.reduce((acc, curr) => acc + curr, 0)
const avg = sum / numsAvg.length
console.log(avg);
console.log("\n---- ---- ----");
console.log("Program 7:")
const numbers2 = [1, 2, 3, 4, 5]
const sumOfSquareNums = numbers2.reduce((acc, curr) => acc + curr ** 2, 0)
console.log(sumOfSquareNums)
console.log("\n---- ---- ----");
console.log("Program 8:")
const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"]
const wordsCount = stationeryWords.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})
console.log(wordsCount)
console.log("\n---- ---- ----");
console.log("Program 9:")
const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"]
const wordsCountWithFirstLettter = wordsLetter.reduce((acc, curr) => {
  const firstLetter = curr.charAt(0)
  acc[firstLetter] = (acc[firstLetter] || 0) + 1
  return acc
} , {})
console.log(wordsCountWithFirstLettter)
console.log("\n---- ---- ----");
console.log("Program 10:")
const numPositive = [-2, 3, 4, -5, 6]
const productOfPositiveNums = numPositive.reduce((acc, curr) => {
  if(curr > 0){
    acc *= curr
  }
  return acc
}, 1)
console.log(productOfPositiveNums)