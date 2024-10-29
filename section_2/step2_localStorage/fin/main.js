// 1. HTML要素を取得
const addButton = document.getElementById('addTodo'); // ボタン
const todoInput = document.getElementById('todoInput'); // 入力フィールド
const todoList = document.getElementById('todoList'); // ToDoリスト

// 2. 新しいToDoをリストに追加する機能を実装
function addToDoToList(todoText) {
  const listItem = document.createElement('li'); // リストアイテムを作成
  listItem.textContent = todoText; // テキストを設定

  // 完了状態のトグル機能を追加
  listItem.addEventListener('click', function () {
    listItem.classList.toggle('completed'); // 完了状態のトグル
  });

  // 削除ボタンの作成
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.classList.add('btn');

  // 削除ボタンの動作を定義
  deleteButton.addEventListener('click', function (event) {
    event.stopPropagation(); // リストアイテムのクリックイベントを防ぐ
    todoList.removeChild(listItem);  // 表示から削除
    removeToDoFromStorage(todoText);  // ローカルストレージからも削除
  });

  listItem.appendChild(deleteButton);
  todoList.appendChild(li); // ToDoリストに追加
}

// 3. ToDoをローカルストレージに保存する機能
function saveToDoToStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos)); // 配列をJSON形式で保存
}

// 4. ToDoをローカルストレージから取得する機能
function loadToDos() {
  const savedToDos = JSON.parse(localStorage.getItem('todos')) || []; // 保存されたToDoを取得
  savedToDos.forEach(todo => addToDoToList(todo)); // 取得したToDoをリストに追加
}

// 5. 新しいToDoを追加するボタンのクリックイベントを定義
addButton.addEventListener('click', function () {
  const newToDo = todoInput.value.trim(); // 入力内容を取得
  if (newToDo) {
    addToDoToList(newToDo);  // リストに新しいToDoを追加
    const savedToDos = JSON.parse(localStorage.getItem('todos')) || [];
    savedToDos.push(newToDo);  // ローカルストレージに新しいToDoを追加
    saveToDoToStorage(savedToDos); // ローカルストレージを更新
    todoInput.value = '';  // 入力欄をクリア  
  }
});

// 6. ページが読み込まれたときにToDoを表示
window.onload = loadToDos; // ページ読み込み時にToDoを取得して表示

// 7. ローカルストレージからToDoを削除する機能を追加
function removeToDoFromStorage(todoText) {
  const savedToDos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedToDos = savedToDos.filter(todo => todo !== todoText); // 削除するToDoを除外
  saveToDoToStorage(updatedToDos); // 更新された配列を保存
}