console.log("Program 1:")
const words = ["apple", "banana", "kiwi", "orange", "grape"]
const stringLength = words.map((str) => str.length)
console.log(stringLength)
console.log("---- ---- ----")
console.log("Program 2:")
const numbers = [1, 2, 3, 4, 5]
const squareNum = numbers.map((num) => num * num)
console.log(squareNum)
console.log("---- ---- ----")
console.log("Program 3:")
const fruits = ["apple", "banana", "kiwi", "orange", "grape"]
const capitalizeStr = fruits.map((str) => str.toUpperCase())
console.log(capitalizeStr)
console.log("---- ---- ----")
console.log("Program 4:")
const nums = [4, 9, 16, 25, 36]
const squareRoorOfNum = nums.map((num) => num ** 0.5)
console.log(squareRoorOfNum)
console.log("---- ---- ----")
console.log("Program 5:")
const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"]
const fruitAfterPrefix = prefixFruits.map((fruit) => "fruit" + "-" + fruit)
console.log(fruitAfterPrefix)
console.log("---- ---- ----")
console.log("Program 6:")
const numbersArray = [1, 2, 3, 4, 5]
const numsArrAfterAdd10 = numbersArray.map((num) => num + 10)
console.log(numsArrAfterAdd10)
console.log("---- ---- ----")
console.log("Program 7:")
const numsArray = [1, 2, 3, 4, 5]
const squareOfNumsArr = numsArray.map((num) => num * num + num)
console.log(squareOfNumsArr)
console.log("---- ---- ----")
console.log("Program 8:")
const numsArr = [-5, 3, -8, 12, -1, 6]
const absoluteNumsArr = numsArr.map((num) => Math.abs(num))
console.log(absoluteNumsArr)
console.log("---- ---- ----")
console.log("Program 9:")
const phrases = ["Hello", "How are you", "Goodbye"]
const appendStringToPhrases = phrases.map((phrase) => phrase + "!")
console.log(appendStringToPhrases)
console.log("---- ---- ----")
console.log("Program 10:")
const newWords = ["apple", "banana", "kiwi", "orange", "grape"]
const capitalizeThirdLetterOfWord = newWords.map((word) => word.slice(0, 2) + word.charAt(2).toUpperCase() + word.slice(3))
console.log(capitalizeThirdLetterOfWord)