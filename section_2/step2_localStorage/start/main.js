const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click',function(){
  const newTodo = todoInput.value.trim();
  const li = document.createElement('li');
  li.innerHTML = newTodo;
  todoList.appendChild(li);

  
})