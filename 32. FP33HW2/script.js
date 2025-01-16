const items = [  
  {id: 1, item: "Item 1", price: 10},  
  {id: 2, item: "Item 2", price: 20}, 
  {id: 3, item: "Item 3", price: 15},  
  {id: 4, item: "Item 4", price: 25}
]

const itemListContainer = document.querySelector("#itemList")
const totalCostElement = document.querySelector("#totalCost")
const avgCostElement = document.querySelector("#avgCost")

const totalCost = items.reduce((acc, curr) => {

  const listItem = document.createElement("li")
  listItem.textContent = `${curr.item} - $${curr.price}`
  itemListContainer.appendChild(listItem)
  
  acc.total += curr.price
  return acc
} , {total: 0})

totalCostElement.textContent = totalCost.total

const avgCost = totalCost.total / items.length

avgCostElement.textContent = avgCost