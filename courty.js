

// var MainEntrance = document.querySelector(".main-entrance");
// var MenuSection = document.querySelector(".menu-section");
// var button = document.querySelector(".btn");




// button.addEventListener("click",()=>{
    
    
//     if (MenuSection.classList.contains("show")) {
//         MenuSection.classList.remove("show");
        
//     }
//     else {
//         MenuSection.classList.add("show");
//     }
      
// })





 var menuSection = document.querySelector(".menu-section");
 var menuButton = document.querySelector(".main-entrance .btn");

 var button =document.getElementById("button");
 

 
 menuButton.addEventListener("click", ()=> {
 
   if (menuSection.style.display === "block") {
     menuSection.style.display = "none";       
   }
    else {
     menuSection.style.display = "block";       
   }

 });

 button.addEventListener("click",()=>{

    if(menuSection.style.diplay === "none"){
        menuSection.style.diplay = "block";
    }
    else{
        menuSection.style.display = "none";    
    }
 })



