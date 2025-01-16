console.log("Program 1:")
const books = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger"},
  {title: "To Kill a Mockingbird", author: "Harper Lee"},
  {title: "1984", author: "George Orwell"}
]
const bookTitles = books.map((book) => book.title)
console.log(bookTitles)
console.log("---- ---- ----")
console.log("Program 2:")
const fruits = [
  {name: "apple", color: "red"},
  {name: "banana", color: "yellow"},
  {name: "kiwi", color: "brown"}
]
const capitalizeFruitsName = fruits.map((fruit) => ({
  ...fruit, name: fruit.name.toUpperCase()
}))
console.log(capitalizeFruitsName)
console.log("---- ---- ----")
console.log("Program 3:")
const employees = [
  {name: "Alice", salary: 50000},
  {name: "Bob", salary: 60000},
  {name: "Charlie", salary: 70000}
]
const employeesWithUpdatedSalary = employees.map((employee) => ({
  ...employee, salary: (employee.salary * 1.10).toFixed(2)
}))
console.log(employeesWithUpdatedSalary)
console.log("---- ---- ----")
console.log("Program 4:")
const products = [
  {name: "Laptop", price: 1000},
  {name: "Smartphone", price: 500},
  {name: "Headphones", price: 100}
]
const productsWithUpdatedPrice = products.map((product) => ({
  ...product, price: product.price * 0.80
}))
console.log(productsWithUpdatedPrice)
console.log("---- ---- ----")
console.log("Program 5:")
const cities = [
  {name: "New York", temperature: 25},
  {name: "Los Angeles", temperature: 30},
  {name: "Chicago", temperature: 20}
]

const citiesWithFahTemp = cities.map((city) => ({...city, temperature: (city.temperature * 9/5 + 32)}))
console.log(citiesWithFahTemp)
console.log("---- ---- ----")
console.log("Program 6:")
const teachers = [
  {name: "Olivia", monthlySalary: 4500},
  {name: "Paul", monthlySalary: 5500},
  {name: "Rachel", monthlySalary: 5000}
]
const teachersWithAnnualIncome = teachers.map((teacher) => ({name: teacher.name, annualIncome: (teacher.monthlySalary * 12 + 500)}))
console.log(teachersWithAnnualIncome)
console.log("---- ---- ----")
console.log("Program 7:")
const countries = [
  {name: "USA", population: 331000000, landArea: 9833517},
  {name: "India", population: 1393000000, landArea: 2973190},
  {name: "Brazil", population: 213993437, landArea: 8515767}
]
const countriesWithPopulationDensity = countries.map((country) => ({name: country.name, populationDensity: country.population / country.landArea}))
console.log(countriesWithPopulationDensity)