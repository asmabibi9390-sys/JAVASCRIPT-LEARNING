// Loop Through HTMLCollection & NodeList

const fruits = document.getElementsByClassName("fruit");

for(let fruit of fruits){

    fruit.style.color = "blue";

}
