let display  = document.querySelector("#display");
let equal  =  document.querySelector("#equal");
let result = document.querySelector(".main-section");
result.addEventListener("keyup", function (event) {
   if (event.key == "Enter" && display.value !=="") {
     display.value = eval(display.value);
   }
 });

equal.addEventListener('click',()=>{
 if(display.value!=''){
        display.value = eval(display.value);
    }   
})

window.addEventListener('unload',()=>{
    if(display.value != 0){
        localStorage.setItem("result",display.value);
    }
})
window.addEventListener('load',()=>{
    let result = localStorage.getItem("result")
    display.value = result;

})