// document.createElement() append()
// Create Element

const newTodoItem = document.createElement("li");

newTodoItem.textContent = "Task 3";

const todoList = document.querySelector(".todo-list ul");

todoList.append(newTodoItem);