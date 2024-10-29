const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

// const savedTodos = JSON.stringify(newTodo)
//   localStorage.setItem('todo', savedTodos);

function addTodoList() {
  const li = document.createElement('li');
  li.innerHTML = newTodo;
  todoList.appendChild(li);
}  const Btn = document.createElement('button');
function addDeleteBtn() {

  Btn.innerHTML = "削除";
  li.appendChild(Btn);
}
addBtn.addEventListener('click', function () {
  const newTodo = todoInput.value.trim();
  addTodoList()
  todoInput.value = "";
})
Btn.addEventListener('click', function () {
  // DOMから削除
  li.remove();
  // localstrageから削除

})


// li.addEventListener("click", function comp() {
//   li.classList.toggle('completed');
// })