// Your code goes here

// document.addEventListener( "DOMContentLoaded", function () {
//     updateDOM()
//   } );
  
  
//   function updateDOM() {
//     document.getElementById( "text" )
//       .innerHTML = "This is really cool!";
//   }

 document.addEventListener("DOMContentLoaded", function (){
   let p = document.querySelector("p#text")
   p.textContent = "This is really cool!"
 }) 