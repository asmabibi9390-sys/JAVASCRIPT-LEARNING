// Callback Functions
 function myFunc(){
    console.log("Hello");
}
function myFunc2(callback){
    callback();
}
myFunc2(myFunc);