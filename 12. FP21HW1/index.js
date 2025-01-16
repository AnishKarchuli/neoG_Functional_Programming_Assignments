console.log("Program 1:")
const nums = [12, 5, 20, 8, 15, 30]
const numsMoreThan10 = nums.filter(num => num > 10)
console.log(numsMoreThan10)
console.log("---- ---- ----")
console.log("Program 2:")
const words = ["hello", "world", "apple", "orange", "banana"]
const wordsWithLetterO = words.filter(word => word.includes("o"))
console.log(wordsWithLetterO)
console.log("---- ---- ----")
console.log("Program 3:")
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const isPrime = (num) => {
  if(num < 2) return false;
  if(num === 2) return true;
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) return false
  }
  return true
}
const primeNumbers = numbers.filter(num => isPrime(num))
console.log(primeNumbers)
console.log("---- ---- ----")
console.log("Program 4:")
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notThreeMultiples = threeMultiples.filter(num => num % 3 !== 0)
console.log(notThreeMultiples)
console.log("---- ---- ----")
console.log("Program 5:")
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numsNotDivisibleBy2And3 = numbs.filter(num => num % 2 !== 0 && num % 3 !== 0)
console.log(numsNotDivisibleBy2And3)
console.log("---- ---- ----")
console.log("Program 6:")
const words2 = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"]
const wordsInUppercase = words2.filter(word => word === word.toUpperCase())
console.log(wordsInUppercase)
console.log("---- ---- ----")
console.log("Program 7:")
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"]
const wordsNotEndingY = wordsY.filter(word => !word.endsWith("y"))
console.log(wordsNotEndingY)
console.log("---- ---- ----")
console.log("Program 8:")
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numsMultipleOf2And3 = nums2.filter(num => num % 2 === 0 && num % 3 === 0)
console.log(numsMultipleOf2And3)
console.log("---- ---- ----")
console.log("Program 9:")
const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"]
const wordsIncludeYandU = feelingWords.filter(word => word.includes('y') && word.includes('u'))
console.log(wordsIncludeYandU)
console.log("---- ---- ----")
console.log("Program 10:")
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numsMultipleOf5And3 = newNums.filter(num => num % 5 === 0 || num % 3 === 0)
console.log(numsMultipleOf5And3)