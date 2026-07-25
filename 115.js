// this Keyword Inside Event Listener
 const allButtons = document.querySelectorAll(".my-btn");
for(let button of allButtons){
 button.addEventListener("click", function(){
     console.log(this);
    });
}