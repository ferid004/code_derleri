const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo");
const deleteAllButton = document.getElementById("deleteAll");
const todoList = document.getElementById("todoList");

// Local Storage'dan verileri al
function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
}

// Local Storage'a verileri kaydet
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Sayfa yüklendiğinde varsa Local Storage'dan verileri al ve göster
function loadTodos() {
    const todos = getTodos();
    for (const todoText of todos) {
        displayTodo(todoText);
    }
}

// Yeni yapılacak ekleyerek Local Storage'ı güncelle
function addTodoToLocalStorage(todoText) {
    const todos = getTodos();
    todos.push(todoText);
    saveTodos(todos);
}

// Yapılacakları ekranda göster
function displayTodo(todoText) {
    const listItem = document.createElement("li");
    listItem.textContent = todoText;

    // Düzenle (Edit) düğmesi oluştur
    const editButton = document.createElement("button");
    editButton.textContent = "Düzenle";
    editButton.addEventListener("click", function () {
        const newText = prompt("Yeni metni girin:", todoText);
        if (newText !== null) {
            todoText = newText;
            listItem.textContent = todoText;
            updateTodoInLocalStorage(todoText, listItem);
        }
    });

    listItem.appendChild(editButton);
    todoList.appendChild(listItem);
}

// Yapılacakları güncelleyerek Local Storage'ı güncelle
function updateTodoInLocalStorage(updatedTodo, listItem) {
    const todos = getTodos();
    const index = Array.from(todoList.children).indexOf(listItem);
    todos[index] = updatedTodo;
    saveTodos(todos);
}

addTodoButton.addEventListener("click", function () {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        displayTodo(todoText);
        addTodoToLocalStorage(todoText);
        todoInput.value = "";
    }
});

deleteAllButton.addEventListener("click", function () {
    deleteAllTodos();
});

todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});

// Sayfa yüklendiğinde Local Storage'dan verileri al ve göster
loadTodos();
