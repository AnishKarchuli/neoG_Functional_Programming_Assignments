const employeeData = [

  { id: 1, name: "Alice", experienceInYears: 2 },

  { id: 2, name: "Bob", experienceInYears: 9 },

  { id: 3, name: "Charlie", experienceInYears: 4 },

  { id: 4, name: "John", experienceInYears: 19 }

];

const employeeList = document.querySelector("#employeeList")
const experienceCheckbox = document.querySelector("#experience")

function renderEmployeeData(isHighExperience) {

  const filteredEmployees = isHighExperience ? employeeData.filter(employee => employee.experienceInYears > 5) : employeeData

  const employeeListHTML = filteredEmployees.map(employee => `
<li>
  <strong>ID:</strong> ${employee.id}<br>
  <strong>Name:</strong> ${employee.name}<br>
  <strong>Experience:</strong> ${employee.experienceInYears} years
  <hr>
</li>
`)

  employeeList.innerHTML = employeeListHTML.join('')
}

renderEmployeeData(false)


experienceCheckbox.addEventListener("change", function() {
  renderEmployeeData(this.checked)
})