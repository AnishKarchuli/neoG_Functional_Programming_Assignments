console.log("Program 1:")
const numsArray = [10, 5, 8, 4, 6]
const requiredArr = numsArray.map((num) => num - num ** 2)
console.log(requiredArr)
console.log("\n---- ---- ----")
console.log("Program 2:")
const numbsArray = [3, -2, -5, 12, 8, -4, 7]
const requiredNumbsArr = numbsArray.map((num) => {
  if(num < 0){
    return num - (num * 2)
  } else {
    return num
  }
})
console.log(requiredNumbsArr)
console.log("\n---- ---- ----")
console.log("Program 3:")
const sentencesArray = [
  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time."
]
const sentencesArrWithWordCount = sentencesArray.map((sentence) => {
  const words = sentence.split(" ")
  const wordCount = words.length
  return `${sentence} ${wordCount}`
})
console.log(sentencesArrWithWordCount)
console.log("\n---- ---- ----")
console.log("Program 4:")
const cars = [
  {brand: "Toyota", model: "Camry"},
  {brand: "Honda", model: "Accord"},
  {brand: "Ford", model: "Mustang"}
]
const carsBrandArr = cars.map((car) => car.brand)
console.log(carsBrandArr)
console.log("\n---- ---- ----")
console.log("Program 5:")
const movies = [
  {title: "Inception", genre: "Sci-Fi"},
  {title: "The Shawshank Redemption", genre: "Drama"},
  {title: "The Dark Knight", genre: "Action"}
]
const genres = movies.map((movie) => movie.genre)
console.log(genres)
console.log("\n---- ---- ----")
console.log("Program 6:")
const furniture = [
  {type: "Sofa", width: 200, height: 80},
  {type: "Table", width: 120, height: 60},
  {type: "Chair", width: 50, height: 45}
]
const furnitureWithIncreasedDim = furniture.map((fur) => {
  const newWidth = fur.width * 1.10
  const newHeight = fur.height * 1.10
  return {type: fur.type, width: newWidth.toFixed(1), height: newHeight.toFixed(1)}
})
console.log(furnitureWithIncreasedDim)
console.log("\n---- ---- ----")
console.log("Program 7:")
const products = [
  {name: "Laptop", price: 1200},
  {name: "Smartphone", price: 800},
  {name: "Headphones", price: 50},
  {name: "Camera", price: 300}
]
const productsWithNewProperty = products.map((product) => ({...product, affordable: product.price <= 100}))
console.log(productsWithNewProperty)
console.log("\n---- ---- ----")
console.log("Program 8:")
const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18]
const evenNegNums = numbers.filter((num) => num < 0 && num % 2 === 0
)
console.log(evenNegNums)
console.log("\n---- ---- ----")
console.log("Program 9:")
const students = [
  {name: "Alice", score: 85, activeParticipant: true, club: "Math"},
  {name: "Bob", score: 55, activeParticipant: false, club: "History"},
  {name: "Charlie", score: 75, activeParticipant: true, club: "Science"}
]
const filteredStudents = students.filter((student) => student.score > 70 && student.activeParticipant === true && student.club === "Math" || student.club === "Science")
console.log(filteredStudents)
console.log("\n---- ---- ----")
console.log("Program 10:")
const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"]
const filteredWords = words.filter((word) => word.includes('a') && word.length > 5)
console.log(filteredWords)