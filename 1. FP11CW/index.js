// map() method - Only works on array

// multiplying array with 2
const numbers = [1, 2, 3, 4, 5]
const numbersMultipliedByTwo = numbers.map((num) => num * 2)
console.log(numbersMultipliedByTwo)
console.log(numbers)

// doubling the array
const numbersArray = [2, 4, 5, 6]
const doubleNumbersInArray = numbersArray.map((num) => num * num)
console.log("Doubled Array: ", doubleNumbersInArray)

// Capitalize first character of each fruit
const wordsArray = ["apple", "mango", "orange", "grapes"]
const capitalizeWordsArray = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
console.log(capitalizeWordsArray)

// change numbers array to strings
const numericArray = [1, 2, 3, 4, 5]

const stringSrray = numericArray.map((num) => num.toString())
console.log("String Array:", stringSrray)