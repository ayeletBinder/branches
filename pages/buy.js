
// // function allowDrop(ev) {
// //     ev.preventDefault();
// //   }
// //   function drag(ev) {
// //     ev.dataTransfer.setData("text", ev.target.id);
// //   }
// //   function drop(ev) {
// //     ev.preventDefault();
// //     var data = ev.dataTransfer.getData("text");
// //     ev.target.appendChild(document.getElementById(data));
// //   }
// let x1=0,x,y;  

//  let  ground=document.getElementById("buybutton1");
//  ground.addEventListener("click",createGround);
//  function createGround(){
//   x1++;
//     ground.addEventListener("click",createGround);
//     // document.querySelector(".first-div").style.display='none';
//     sum= sum-100;
//     let location=document.getElementById("ground-div").style.displaylay="block";
//     location.addEventListener("click",function(){
//       let image=document.createElement("img");
//       image.src="../images/ground.png";
//       image.setAttribute("draggable","true");
//       image.ondragstart="drag(event)";
//       image.setAttribute("id","drag"+x);
//       ground.appendChild(image);
//       getClickPosition(event);
//       image.style.left = `${x}px`;
//       image.style.top = `${y}px`;
//       image.style.display = 'block';
//     })
    
//  }
//  function getClickPosition(e) {
//   // I need the click position of the gray box 
//   // but when I click on the green or red box I get their values
//   if (e.target.classList.contains('clickDiv')) {
//     console.log('clicked on clickDiv background');
//     return;
//   }
//   let ref = e.target.closest('.clickDiv').getBoundingClientRect()
//   let pos = e.target.getBoundingClientRect();
//   let posY = pos.top - ref.top
//   let posX = pos.left - ref.left
//   let mouseY = e.clientY - ref.top
//   let mouseYPerc = ((mouseY / ref.height) * 100).toFixed(2);
//   let mouseX = e.clientX - ref.top
//   let mouseXPerc = ((mouseX / ref.width) * 100).toFixed(2)
//   console.log('my relative position X:' + posX + ' Y:' + posY);
//   console.log("relative mouseX:" + mouseX + " (" + mouseXPerc + "%) horiz");
//   console.log("relative mouseY:" + mouseY + " (" + mouseYPerc + "%) vert");
//   x=posX;
//   y=posY;
// }





















