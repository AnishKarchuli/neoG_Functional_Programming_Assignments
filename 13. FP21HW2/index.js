console.log("Program 1:");
const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);
console.log("---- ---- ----");
console.log("Program 2:");
const words = ["kiwi", "mango", "apple", "orange", "banana"];
const wordsLengthMoreThan5 = words.filter((word) => word.length > 5);
console.log(wordsLengthMoreThan5);
console.log("---- ---- ----");
console.log("Program 3:");
const words2 = ["Sun", "Moon", "Star", "Planet", "Saturn"];
const wordsStartWithS = words2.filter((word) => word.startsWith("S"));
console.log(wordsStartWithS);
console.log("---- ---- ----");
console.log("Program 4:");
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notThreeMultiples = threeMultiples.filter((num) => num % 3 !== 0);
console.log(notThreeMultiples);
console.log("---- ---- ----");
console.log("Program 5:");
const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const numsDivisibleBy7And3 = numbs.filter(
  (num) => num % 7 === 0 && num % 3 === 0,
);
console.log(numsDivisibleBy7And3);
console.log("---- ---- ----");
console.log("Program 6:");
const words3 = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const wordsWithLowercase = words3.filter((word) => word === word.toLowerCase());
console.log(wordsWithLowercase);
console.log("---- ---- ----");
console.log("Program 7:");
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordsNotContainA = wordsY.filter((word) => !word.includes("a"));
console.log(wordsNotContainA);
console.log("---- ---- ----")
console.log("Program 8:")
const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numsMultipleOf2And3 = numsOnetoTen.filter(num => num % 2 === 0 || num % 3 === 0)
console.log(numsMultipleOf2And3)
console.log("---- ---- ----")
console.log("Program 9:")
const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"]
const wordIncludesYOrA = feelingWords.filter(word => word.includes('y') || word.includes('a'))
console.log(wordIncludesYOrA)
console.log("---- ---- ----")
console.log("Program 10:")
const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100]
const numsBetween20And40 = newNums.filter(num => num >= 20 && num <= 40)
console.log(numsBetween20And40)