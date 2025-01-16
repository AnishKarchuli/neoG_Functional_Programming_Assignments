console.log("Program 1:")
const productInfo = [
  {key: "name", value: "Laptop"},
  {key: "price", value: 12000},
  {key: "brand", value: "Dell"}
]
const transformProductInfo = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
} , {})
console.log(transformProductInfo)
console.log("\n---- ---- ----")
console.log("Program 2:")
const colleges = [
  {item: "Book", university: "Harvard"},
  {item: "Book", university: "MIT"},
  {item: "Book", university: "Stanford"}
]
const university = colleges.reduce((acc, curr) => {
  acc.push(curr.university)
  return acc
} , [])
console.log(university)
console.log("\n---- ---- ----")
console.log("Program 3:")
const userPreferences = [
  {key: "theme", value: "Dark Mode"},
  {key: "fontSize", value: 16},
  {key: "notifications", value: true}
]
const transformedUserPreferences = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
} , {})
console.log(transformedUserPreferences)
console.log("\n---- ---- ----")
console.log("Program 4:")
const continents = [
  {key: "Asia", country: "India"},
  {key: "Europe", country: "France"},
  {key: "North America", country: "USA"}
]
const transformedContinents = continents.reduce((acc, curr) => {
  acc[curr.key] = curr.country
  return acc
} , {})
console.log(transformedContinents)
console.log("\n---- ---- ----")
console.log("Program 5:")
const information = [
  {key: "city", value: "New York"},
  {key: "population", value: 8398748},
  {key: "area", value: 468.9}
]
const transformedInformation = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
} , {})
console.log(transformedInformation)