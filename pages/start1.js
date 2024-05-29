

// document.getElementById("menu-button").addEventListener("click",function(){
//   console.log("i am clicking");
//   window.location.href="./pouse.html";
// })
// // const timeImg=["../images/ti1.png","../images/ti2.png","../images/ti3.png"];
// let timeImg="../images/ti1.png";
// let where=1;
// setInterval("tifunction()",3000);
// function tifunction(){
//     if(where<3){
//         where++
//         let src1="../images/ti"+where+".png";
//         timeImg.src=src1;
//     }

// }
// let countImg=3;
document.getElementById("before-starting").addEventListener("click",function(){

    document.getElementById('div-startbefore').style.visibility='visible'; 
})

// document.querySelector('#img-startbefore1').addEventListener("dragstart",function(ev){
//       ev.dataTransfer.setData("text", ev.target.id);
//       countImg--;
//       console.log(countImg);
// })
// document.querySelector('#img-startbefore2').addEventListener("dragstart",function(ev){
//       ev.dataTransfer.setData("text", ev.target.id);
//       countImg--;
//       console.log(countImg);
// })
// document.querySelector('#img-startbefore3').addEventListener("dragstart",function(ev){
//       ev.dataTransfer.setData("text", ev.target.id);
//       countImg--;
//       console.log(countImg);
// })

// document.querySelector('#div-drog').addEventListener("drop",function(ev){
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
//     if(countImg==0)
//     {
//         document.getElementById('before-starting').style.visibility='hidden'; 
//     }
// })    
// document.querySelector('#div-drog').addEventListener("dragover",function(ev){
//   ev.preventDefault();
// })    
// js of timer
//  let countTimer=1;

//  timerSetI=setInterval(function(){
// if(countTimer==8)
//     clearInterval(timerSetI);
// else
//     {
//         countTimer++;
//         let imgtimer=document.getElementById('timerimage');
//         let v='../images/timer'+countTimer+'.png';
//         imgtimer.src=v;
//     }
// },3000/*countTask*tomeKind/8*/);







