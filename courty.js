


AOS.init();
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



//  menuButton.addEventListener("click", ()=> {
 
//    if (menuSection.style.display === "block") {
//      menuSection.style.display = "none";       
//    }
//     else {
//      menuSection.style.display = "block";       
//    }

//  });

//  button.addEventListener("click",()=>{

//     if(menuSection.style.diplay === "none"){
//         menuSection.style.diplay = "block";
//     }
//     else{
//         menuSection.style.display = "none";    
//     }
//  })





 var menuSection = document.querySelector(".menu-section");
 var menuButton = document.querySelector(".main-entrance .btn");

 var button =document.getElementById("button");
 


 menuButton.addEventListener("click",()=>{
  
  if(menuSection.classList.contains("show")){
    menuSection.classList.remove("show");
  }
  else{
    menuSection.classList.add("show");
    menuSection.classList.toggle("active");
  }

 })
 button.addEventListener("click",()=>{
  if(menuSection.classList.contains("show")){
    menuSection.classList.remove("show");
  }
  else{
    menuSection.classList.add("show");
  }
 })


 const sswiper = new Swiper("#first-swiper",{
  
  loop: true,
  pagination:{
    el: '.swiper-pagination',
  },
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
 })



 const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  centerSlider: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



});





  // document.addEventListener("DOMContentLoaded", function () {
  //   const secswiper = new Swiper("#second-swiper", {
  //     loop: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     scrollbar: {
  //       el: ".swiper-scrollbar",
  //     },
  //   });
  // });



 






