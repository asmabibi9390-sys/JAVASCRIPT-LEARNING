cloneNode(True)

const list = document.querySelector(".fruits");

const cloneList = list.cloneNode(true);

cloneList.firstElementChild.textContent = "Orange";

document.body.append(cloneList);