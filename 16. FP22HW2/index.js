console.log("Program 1:")
const smartphones = [
  {brand: "iPhone", year: 2019, cameraResolution: 12.2},
  {brand: "Samsung", year: 2021, cameraResolution: 13},
  {brand: "Google Pixel", year: 2018, cameraResolution: 11}
]
const filteredOutSmartphones = smartphones.filter(smartphone => smartphone.year >= 2020 && smartphone.cameraResolution >= 12)
console.log(filteredOutSmartphones)
console.log("---- ---- ----")
console.log("Program 2:")
const books = [
  {title: "The Da Vinci Code", year: 2003, pages: 454},
  {title: "The Alchemist", year: 1988, pages: 197},
  {title: "The Hunger Games", year: 2008, pages: 374}
]
const filteredOutBooks = books.filter(book => book.year >= 2005 && book.pages <= 400)
console.log(filteredOutBooks)
console.log("---- ---- ----")
console.log("Program 3:")
const students = [
  {name: "Alice", age: 20, gpa: 3.8},
  {name: "Bob", age: 17, gpa: 3.2},
  {name: "Charlie", age: 19, gpa: 3.9}
]
const filteredOutStudents = students.filter(student => student.age >= 18 && student.gpa >= 3.5)
console.log(filteredOutStudents)
console.log("---- ---- ----")
console.log("Program 4:")
const employees = [
  {name: "Emily", salary: 55000, hireYear: 2008},
  {name: "David", salary: 48000, hireYear: 2012},
  {name: "Grace", salary: 60000, hireYear: 2006}
]
const filteredOutEmployees = employees.filter(employee => employee.salary >= 50000 && employee.hireYear >= 2010)
console.log(filteredOutEmployees)
console.log("---- ---- ----")
console.log("Program 5:")
const products = [
  {name: "Laptop", price: 1200, inStock: true},
  {name: "Headphones", price: 50, inStock: false},
  {name: "Smartphone", price: 800, inStock: true}
]
const filteredOutProducts = products.filter(product => product.price >= 100 && product.inStock === true)
console.log(filteredOutProducts)
console.log("---- ---- ----")
console.log("Program 6:")
const movies = [
  {title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi"},
  {title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action"},
  {title: "Avatar", year: 2009, rating: 7.8, genre: "Adventure"},
  {title: "The Dune", year: 2018, rating: 6.0, genre: "Action"}
]
const filteredOutMovies = movies.filter(movie => movie.year >= 2010 && movie.rating >= 8 && movie.genre === "Action")
console.log(filteredOutMovies)
console.log("---- ---- ----")
console.log("Program 7:")
const apartments = [
  {location: "Downtown", price: 1600, bedrooms: 2, safeNeightbourhood: true},
  {location: "Suburb", price: 1400, bedrooms: 1, safeNeightbourhood: false},
  {location: "City Center", price: 1800, bedrooms: 3, safeNeightbourhood: true}
]
const filteredOutApartments = apartments.filter(apartment => apartment.price >= 1500 && apartment.safeNeightbourhood === true && apartment.bedrooms >= 2)
console.log(filteredOutApartments)
console.log("---- ---- ----")
console.log("Program 8:")
const products2 = [
  {name: "Laptop", price: 800, onlineAvailability: true, category: "Electronics"},
  {name: "Book", price: 20, onlineAvailability: false, category: "Literature"},
  {name: "Book", price: 40, onlineAvailability: false, category: "Classic"},
  {name: "Headphones", price: 60, onlineAvailability: true, category: "Electronics"}
]
const filteredOutProducts2 = products2.filter(product => product.price >= 50 && product.onlineAvailability === true && product.category === "Electronics")
console.log(filteredOutProducts2)
console.log("---- ---- ----")
console.log("Program 9:")
const jobApplicants = [
  {name: "Alice", experienceYears: 4, englishProficiency: true, relevantDegree: true},
  {name: "Bon", experienceYears: 2, englishProficiency: false, relevantDegree: true},
  {name: "Charlie", experienceYears: 5, englishProficiency: true, relevantDegree: false}
]
const filteredOutApplicants = jobApplicants.filter(applicant => applicant.experienceYears >= 3 && applicant.englishProficiency === true && applicant.relevantDegree === true)
console.log(filteredOutApplicants)
console.log("---- ---- ----")
console.log("Program 10:")
const restaurants = [
  {name: "Gourmet Grill", stars: 4.5, vegetarianOptions: true, location: "City"},
  {name: "Fast Noodles", stars: 3.8, vegetarianOptions: false, location: "Suburb"},
  {name: "Healthy Bites", stars: 4.2, vegetarianOptions: true, location: "City"},
  {name: "Chat Street", stars: 3.5, vegetarianOptions: false, location: "Suburb"}
]
const filteredOutRestaurants = restaurants.filter(restaurant => restaurant.stars >= 4 && restaurant.vegetarianOptions === true && restaurant.location === "City")
console.log(filteredOutRestaurants)
console.log("---- ---- ----")
console.log("Program 11:")
const books2 = [
  {title: "The Da Vinci Code", year: 2003, rating: 8.6, genre: "Mystery"},
  {title: "To Kill a Mockingbird", year: 1960, rating: 8.3, genre: "Drama"},
  {title: "Gone Girl", year: 2012, rating: 9.0, genre: "Thriller"}
]
const filteredOutBooks2 = books2.filter(book => book.year >= 2000 && book.rating >= 7.5 && book.genre === "Mystery" || book.genre === "Thriller")
console.log(filteredOutBooks2)
console.log("---- ---- ----")
console.log("Program 12:")
const employees2 = [
  {name: "David", experienceYears: 6, englishProficiency: true, department: "Engineering"},
  {name: "Emma", experienceYears: 4, englishProficiency: false, department: "Finance"},
  {name: "Alex", experienceYears: 7, englishProficiency: true, department: "Marketing"}
]
const filteredOutEmployees2 = employees2.filter(employee => employee.experienceYears >= 5 && employee.englishProficiency === true && employee.department === "Engineering" || employee.department === "Marketing")
console.log(filteredOutEmployees2)