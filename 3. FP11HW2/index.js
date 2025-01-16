console.log("Program 1:")
const words = ["apple", "banana", "kiwi", "orange", "grape"]
const extractFirstThreeWords = words.map((str) => str.slice(0, 3))
console.log(extractFirstThreeWords)
console.log("---- ---- ----")
console.log("Program 2:")
const nums = [1, 2, 3, 4, 5]
const cubeOfNums = nums.map((num) => num ** 3)
console.log(cubeOfNums)
console.log("---- ---- ----")
console.log("Program 3:")
const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"]
const extractedFruitsArr = fruitsArray.map((fruit) => fruit.slice(2))
console.log(extractedFruitsArr)
console.log("---- ---- ----")
console.log("Program 4:")
const salaries = [5000, 7500, 12000, 3000, 9000]
const salariesWithBonus = salaries.map((sal) => sal + (0.10 * sal))
console.log(salariesWithBonus)
console.log("---- ---- ----")
console.log("Program 5:")
const names = ["Alice", "Bob", "Charlie", "David", "Eva"]
const greetings = names.map((name) => "Hello, " + name)
console.log(greetings)
console.log("---- ---- ----")
console.log("Program 6:")
const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."]
const sentenceLength = sentences.map((sentence) => sentence.length)
console.log(sentenceLength)
console.log("---- ---- ----")
console.log("Program 7:")
const temperaturesCelsius = [0, 20, 37, -5, 10]
const temperatureFahrenheit = temperaturesCelsius.map((temp) => (temp * (9/5)) + 32)
console.log(temperatureFahrenheit)
console.log("---- ---- ----")
console.log("Program 8:")
const prices = [50, 75, 120, 30, 90]
const discountedPrice = prices.map((price) => price - (0.10 * price))
console.log(discountedPrice)
console.log("---- ---- ----")
console.log("Program 9:")
const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789]
const numbersUptoTwoDecimal = decimalNumbers.map((num) => num.toFixed(2))
console.log(numbersUptoTwoDecimal)
console.log("---- ---- ----")
console.log("Program 10:")
const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"]
const namesWithLength = namesArray.map((name) => name + name.length)
console.log(namesWithLength)