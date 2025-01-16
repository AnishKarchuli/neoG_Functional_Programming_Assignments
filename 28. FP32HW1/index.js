console.log("Program 1:")
const data = [
  {key: "item", value: "Pencil"},
  {key: "price", value: 250},
  {key: "inStock", value: true}
]

const transformedData = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
} , {})
console.log(transformedData)
console.log("\n---- ---- ----")
console.log("Program 2:")
const students = [
  {item: "Pen", color: "blue"},
  {item: "Pen", color: "black"},
  {item: "Pen", color: "red"}
]
const colors = students.reduce((acc, curr) => {
  acc.push(curr.color)
  return acc
} , [])
console.log(colors)
console.log("\n---- ---- ----")
console.log("Program 3:")
const countries = [
  {item: "Car", manufacturingCity: "New York"},
  {item: "Car", manufacturingCity: "Los Angeles"},
  {item: "Car", manufacturingCity: "Chicago"}
]
const cities = countries.reduce((acc, curr) => {
  acc.push(curr.manufacturingCity)
  return acc
} , [])
console.log(cities)
console.log("\n---- ---- ----")
console.log("Program 4:")
const groceryItems = [
  {item: "Fruit", name: "Apple"},
  {item: "Fruit", name: "Banana"},
  {item: "Fruit", name: "Orange"}
]
const fruits = groceryItems.reduce((acc, curr) => {
  acc.push(curr.name)
  return acc
} , [])
console.log(fruits)
console.log("\n---- ---- ----")
console.log("Program 5:")
const details = [
  {key: "category", value: "Electronics"},
  {key: "rating", value: 4.5},
  {key: "available", value: true}
]
const transformDetails = details.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
} , {})
console.log(transformDetails)