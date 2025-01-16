console.log("Program 1:")
const students = [
  {name: "Alice", grade: 80},
  {name: "Bob", grade: 65},
  {name: "Charlie", grade: 90}
]
const filterOutStudentsGradeLowerThan70 = students.filter(student => student.grade >= 70)
console.log(filterOutStudentsGradeLowerThan70)
console.log("---- ---- ----")
console.log("Program 2:")
const products = [
  {name: "Laptop", price: 1200},
  {name: "Smartphone", price: 800},
  {name: "Tablet", price: 500}
]
const filterOutProductPriceHigherThan1000 = products.filter(product => product.price <= 1000)
console.log(filterOutProductPriceHigherThan1000)
console.log("---- ---- ----")
console.log("Program 3:")
const employees = [
  {name: "Alice", salary: 60000},
  {name: "Bob", salary: 45000},
  {name: "Charlie", salary: 70000}
]
const filterOutEmployeesOfLowerSalary = employees.filter(employee => employee.salary >= 50000)
console.log(filterOutEmployeesOfLowerSalary)
console.log("---- ---- ----")
console.log("Program 4:")
const movies = [
  {title: "Inception", rating: 8.8},
  {title: "Interstellar", rating: 8.6},
  {title: "The Dark Knight", rating: 9.0}
]
const filterOutMoviesWithLowerRating = movies.filter(movie => movie.rating >= 7)
console.log(filterOutMoviesWithLowerRating)
console.log("---- ---- ----")
console.log("Program 5:")
const cars = [
  {brand: "Toyota", year: 2018},
  {brand: "Honda", year: 2019},
  {brand: "Ford", year: 2010}
]
const currentYear = new Date().getFullYear()
const filterOutCarsOlderThan5 = cars.filter(car => currentYear - car.year <= 5)
console.log(filterOutCarsOlderThan5)
console.log("---- ---- ----")
console.log("Program 6:")
const students2 = [
  {name: "Alice", gpa: 3.8},
  {name: "Bob", gpa: 3.2},
  {name: "Charlie", gpa: 3.9}
]
const filterOutStudentsWithLowerGPA = students2.filter(student => student.gpa >= 3.5)
console.log(filterOutStudentsWithLowerGPA)
console.log("---- ---- ----")
console.log("Program 7:")
const fruits = [
  {name: "Apple", pricePerPound: 1.5},
  {name: "Banana", pricePerPound: 2.2},
  {name: "Orange", pricePerPound: 1.8}
]
const filterOutFruitsWithHigherPrice = fruits.filter(fruit => fruit.pricePerPound <= 2)
console.log(filterOutFruitsWithHigherPrice)
console.log("---- ---- ----")
console.log("Program 8:")
const employees2 = [
  {name: "Alice", employed: true},
  {name: "Bob", employed: false},
  {name: "Charlie", employed: true}
]
const employedEmployees = employees2.filter(employee => employee.employed === true)
console.log(employedEmployees)
console.log("---- ---- ----")
console.log("Program 9:")
const products2 = [
  {name: "Laptop", inStock: true},
  {name: "Smartphone", inStock: false},
  {name: "Tablet", inStock: true}
]
const productsInStock = products2.filter(product => product.inStock === true)
console.log(productsInStock)
console.log("---- ---- ----")
console.log("Program 10:")
const laptops = [
  {brand: "Dell", screenSize: 14},
  {brand: "HP", screenSize: 15.6},
  {brand: "Lenovo", screenSize: 13},
  {brand: "Acer", screenSize: 17}
]
const filteredOutLaptops = laptops.filter(laptop => laptop.screenSize >= 15)
console.log(filteredOutLaptops)