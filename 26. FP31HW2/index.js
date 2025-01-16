const { access } = require("fs")

console.log("Program 1:")
const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"]
const totalLengthOfAllStr = stationeryWords.reduce((acc, curr) => acc + curr.length, 0)
console.log(totalLengthOfAllStr)
console.log("\n---- ---- ----")
console.log("Program 2:")
const numbersArray = [1, 2, 3, 4, 5, 6]
const sumOfEvenNums = numbersArray.reduce((acc, curr) => {
  if(curr % 2 === 0){
    acc += curr
  }
  return acc
}, 0)
console.log(sumOfEvenNums)
console.log("\n---- ---- ----")
console.log("Program 3:")
const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10]
const countOddNums = numsArr.reduce((acc, curr) => {
  if(curr % 2 !== 0){
    acc += 1
  }
  return acc
} , 0)
console.log(countOddNums)
console.log("\n---- ---- ----")
console.log("Program 4:")
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const countOfEvenAndOddNums = nums.reduce((acc, curr) => {
  if(curr % 2 === 0){
    acc.even = (acc.even || 0) + 1
  } else {
    acc.odd = (acc.odd || 0) + 1
  }
  return acc
}, {even: 0, odd: 0})
console.log(countOfEvenAndOddNums)
console.log("\n---- ---- ----")
console.log("Program 5:")
const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12]
const countOfPosAndNeg = allNumns.reduce((acc, curr) => {
  if(curr > 0){
    acc.pos = (acc.pos || 0) + 1
  } else {
    acc.neg = (acc.neg || 0) + 1
  }
  return acc
} , {pos: 0, neg: 0})
console.log(countOfPosAndNeg)
console.log("\n---- ---- ----")
console.log("Program 6:")
const numPositive = [-2, 3, 4, 0, -5, 6]
const productOfNegNums = numPositive.reduce((acc, curr) => {
  if(curr < 0){
    acc *= curr
  }
  return acc
}, 1)
console.log(productOfNegNums)
console.log("\n---- ---- ----")
console.log("Program 7:")
const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"]
const concatAndCapitalizeWords = wordsCaps.reduce((acc, curr) => (acc + curr.toUpperCase() + " "), "").trim()
console.log(concatAndCapitalizeWords)
console.log("\n---- ---- ----")
console.log("Program 8:")
const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12]
const countOfPosEvenAndOtherNums = allNumsArr.reduce((acc, curr) => {
  if(curr > 0 && curr % 2 === 0){
    acc.posEven = (acc.posEven || 0) + 1
  } else {
    acc.others = (acc.others || 0) + 1
  }
  return acc
} , {posEven: 0, others: 0})
console.log(countOfPosEvenAndOtherNums)
console.log("\n---- ---- ----")
console.log("Program 9:")
const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11]
const sumOfNegOddNums = numbersArr.reduce((acc, curr) => {
  if(curr < 0 && curr % 2 !== 0){
    acc += curr
  }
  return acc
} , 0)
console.log(sumOfNegOddNums)
console.log("\n---- ---- ----")
console.log("Program 10:")
const letters = ["a", "l", "p", "h", "a", "b", "e", "t"]
const concatLetters = letters.reduce((acc, curr) => acc + curr , "")
console.log(concatLetters)