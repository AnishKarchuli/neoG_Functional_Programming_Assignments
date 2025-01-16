const tasks = [

  { id: 1, task: "Task 1", status: "todo" },

  { id: 2, task: "Task 2", status: "completed" },

  { id: 3, task: "Task 3", status: "inProgress" },

  { id: 4, task: "Task 4", status: "todo" },

  { id: 5, task: "Task 5", status: "completed" }

]

const todoListContainer = document.querySelector("#todoList")

const filterRadioBtns = document.getElementsByName("task")

function renderTasks(selectedStatus) {

  const filterTaskByStatus = selectedStatus === "all" ? tasks : tasks.filter(task => task.status === selectedStatus)
  
  const todoListHTML = filterTaskByStatus.map(task => `
<li>
  <strong>ID:</strong> ${task.id}<br>
  <strong>Task:</strong> ${task.task}<br>
  <strong>Status:</strong> ${task.status}
  <hr>
</li>
`)

  todoListContainer.innerHTML = todoListHTML.join('')
}

renderTasks('all')

filterRadioBtns.forEach(radioBtn => {
  radioBtn.addEventListener("change", function(){
    renderTasks(this.value)
  })
})
