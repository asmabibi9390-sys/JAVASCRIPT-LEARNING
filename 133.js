// Promise.resolve() & Promise.reject()
const marks = 80;
function checkResult(){
    if(marks >= 50){
        return Promise.resolve("Pass");
    }else{
        return Promise.reject("Fail");
    }

}
checkResult()
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
});