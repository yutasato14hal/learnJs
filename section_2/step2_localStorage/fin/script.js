const addButton = document.getElementById('addTodo');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

window.onload = function() {
  // ローカルストレージから保存されたToDoを取得し表示
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  savedTodos.forEach(todo => addTodoToList(todo));
};

// ToDoをローカルストレージに保存
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 新しいToDoをリストに追加
function addTodoToList(todoText) {
  const li = document.createElement('li');
  li.textContent = todoText;

  // 完了したToDoにスタイルを適用
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // 削除ボタンの作成
  const btn = document.createElement('button');
  btn.textContent = '削除';
  btn.classList.add('btn');
  btn.addEventListener('click', function (event) {
    event.stopPropagation();
    todoList.removeChild(li);  // 表示から削除
    removeTodoFromStorage(todoText);  // ローカルストレージからも削除
  });

  li.appendChild(btn);
  todoList.appendChild(li);
}

// 新しいToDoを追加するボタンの動作
addButton.addEventListener('click', function () {
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    addTodoToList(newTodo);  // 表示に追加
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.push(newTodo);  // ローカルストレージに保存
    saveTodos(savedTodos);
    todoInput.value = '';  // 入力欄をクリア
  }
});

// ローカルストレージからToDoを削除
function removeTodoFromStorage(todoText) {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = savedTodos.filter(todo => todo !== todoText);
  saveTodos(updatedTodos);
}
