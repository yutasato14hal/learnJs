const addBtn = document.getElementById('addTodo')
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')

function addTodoToList(todoText) {
  const li = document.createElement('li');
  li.textContent = todoText;
  li.addEventListener('click', function () {
    li.classList.toggle('completed'); // 完了状態のトグル
  }); 
  const dlBtn = document.createElement('button');
  dlBtn.textContent = 'del';
  dlBtn.classList.add('btn');

  dlBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    todoList.removeChild(li)
  })
}
