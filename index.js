let btns = document.querySelectorAll(".button")
console.log("start")
let string = ""
Array.from(btns).forEach((button)=>{
   button.addEventListener("click",function(){
       

       if (button.innerHTML == "=")
       {
           let str = 0 ;
           str= parseFloat(eval(string)).toFixed(9)
           document.querySelector("input").value = str

       }
       else if(button.innerHTML == "C" ) {
        string = ""
        document.querySelector("input").value = string
       }
       else if (button.innerHTML == '<img src="delete-removebg-preview.png">')
       {
           string = string.slice(0,string.length-1)
           document.querySelector("input").value = string
       }
       else if (button.innerHTML == "()")
       {
           if (string.includes('(')){
               string  = string  + ")"
               document.querySelector("input").value = string 
           }
           else {
               string = string + '('
               document.querySelector("input").value = string 
           }
       }
       else {
        string =  string +  button.innerHTML 
       
        document.querySelector("input").value = string 
 
       }
   })
})