// insertAdjacentElement()
const heading = document.querySelector("h1");

const para = document.createElement("p");
para.textContent = "Welcome to JavaScript";

heading.insertAdjacentElement("afterend", para);