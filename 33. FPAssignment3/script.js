const expenses = [
  { id: 1, name: "Groceries", amount: 150 },
  { id: 2, name: "Utilities", amount: 80 },
  { id: 3, name: "Dining Out", amount: 120 },
  { id: 4, name: "Transportation", amount: 50 }
];

const expenseCheckbox = document.querySelector("#expenseCheckbox")
const expenseListContainer = document.querySelector("#expenseList")
const totalExpensesElement = document.querySelector("#totalExpenses")

expenseCheckbox.addEventListener('change', updateExpenseList)

function updateExpenseList(){

  const filteredExpenses = expenseCheckbox.checked ? expenses.filter((expense) => expense.amount > 100) : expenses

  const displayExpensesList = filteredExpenses.map((expense) => {
    return `<li><strong>Expenses:</strong> ${expense.name}<br><strong>Amount:</strong> $${expense.amount}<hr></li>`
  }).join('')
  expenseListContainer.innerHTML = displayExpensesList

  const totalExpenses = filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0)
  totalExpensesElement.textContent = `$${totalExpenses}`
}

updateExpenseList()

