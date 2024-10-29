const addButton = document.getElementById('addTodo');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', function () {
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    const li = document.createElement('li');
    li.textContent = newTodo;

    li.addEventListener('click', function () {
      li.classList.toggle('completed')
    })

    const btn = document.createElement('button');
    btn.textContent = '削除';
    btn.addEventListener('click', function (event) {
      event.stopPropagation()
      todoList.removeChild(li)
    })


    todoList.appendChild(li);
    li.appendChild(btn);
    todoInput.value = '';
  }
})

