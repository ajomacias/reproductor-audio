const conatiner = document.querySelector("#con");
const div = document.querySelector("#dd");
const selectOriginal = [...document.getElementById("s").children ] ;
 
document.getElementById("btn").addEventListener("click",()=>{

   const select = document.createElement("select");
   selectOriginal.forEach((item)=>{

       const option = document.createElement("option");
       option.value = item.value;
       option.textContent = item.textContent;
       select.appendChild(option)

   })
   
   select.id = "lol";
   

   conatiner.appendChild(select)
})