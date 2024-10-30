
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');


// const savedTodos = JSON.stringify(newTodo)
//   localStorage.setItem('todo', savedTodos);
const li = document.createElement('li');
const Btn = document.createElement('button');
function addDeleteBtn() {
  Btn.innerHTML = "削除";
  li.appendChild(Btn);
}
// function savedTodos(){
//   const Storage = 
// }
addBtn.addEventListener('click', function () {
  const newTodo = todoInput.value.trim();
  li.innerHTML = newTodo;
  todoList.appendChild(li);
  todoInput.value = "";
  addDeleteBtn();
})
Btn.addEventListener('click', function () {
  // DOMから削除
  li.remove();
  // localstrageから削除
})


// li.addEventListener("click", function comp() {
//   li.classList.toggle('completed');
// })