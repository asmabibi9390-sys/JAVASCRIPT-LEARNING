// (Static NodeList)
const items = document.querySelectorAll(".item");

console.log(items.length); // 3

const newItem = document.createElement("li");
newItem.className = "item";
newItem.textContent = "React";

document.getElementById("list").append(newItem);

console.log(items.length); // 3 