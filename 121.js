// Project Using Event Delegation
const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", function(event) {
    event.target.remove();
});