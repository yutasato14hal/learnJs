const form = document.getElementById('todoForm')
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTodo = todoInput.value.trim();
})
if (newTodo === '') {
  alert('Todoを入力してください');
} else {
  const li = document.createElement('li')
  li.textContent = newTodo;
  todoList.appendChild(li)
  todoInput.value = '';
}