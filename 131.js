// // .then() .catch().

// const promise = new Promise((resolve, reject)=>{
//     reject("Network Error");
// });

// promise
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });


const age = 20;
const promise = new Promise((resolve, reject) => {

    if(age >= 18){
        resolve("You Can Vote");
    }else{
        reject("You Cannot Vote");
    }

});

promise.then((msg)=>{
    console.log(msg);
});