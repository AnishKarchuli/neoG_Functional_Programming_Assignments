// array of object into an object
const data = [
  {key: "name", value: "John"},
  {key: "age", value: 25},
  {key: "city", value: "London"}
]

// {name: "John", age: 25, city: "London"}

const transformData = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
} , {})

console.log(transformData)

// nested array into a single array
const nestedArray = [[1, 2], [3, 4], [5, 6]]
// [1, 2, 3, 4, 5, 6]

const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr) , [])
console.log(flattenedArray)

// array of objects into an array
const students = [
  {name: "Alice", grade: "A"},
  {name: "Bob", grade: "B"},
  {name: "John", grade: "C"}
]

// ["A", "B", "C"]

const grades = students.reduce((acc, curr) => {
  acc.push(curr.grade)
  return acc
} , [])
console.log(grades)