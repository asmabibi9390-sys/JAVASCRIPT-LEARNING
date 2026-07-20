const { i } = require("./23");

// break keyword
for(let i = 0; i <= 10; i++){
    if(i === 4){
        break;
    }
    console.log(i);
}

console.log("Hello There");
for (let i = 0; i <= 10; i++) {

    if (i === 4) {
        continue;
    }

    console.log(i);
}

