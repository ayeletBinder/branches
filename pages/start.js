let sum = 1000,x,y;
let x1 = 0,x2=0,x3=0;
let flag=false;
let location1,image;
let elements=[];
let ground = document.getElementById("buybutton1");
let flower = document.getElementById("buybutton2");
let tomato = document.getElementById("buybutton3");
ground.addEventListener("click", createGround);
flower.addEventListener("click",create_flower);
tomato.addEventListener("click",createTomato);

function create_flower() {
  flower.disabled = true;
  x2++;
  flag = true;
  sum = sum - 100;
  location1 = document.getElementById("vect-div");
  location1.style.display="block";
  location1.style.border = "1px solid black";
  function handleClick(event) {
      if (flag) {
          flag = false;
          image = document.createElement("img");
          image.src = "../images/flower.png";
          image.setAttribute("draggable", "true");
          image.setAttribute("id", "flower-image" + x2);
          image.style.zIndex = "2";
          image.style.width = "auto";
          image.style.position = "absolute";
          location1.appendChild(image);
          getClickPosition(event);
          image.style.display = 'block';
          createFlowerObject();
          ground.disabled = false;
          location1.style.border = "none";
          // Removing the event listener here
          location1.removeEventListener("click", handleClick);
          elementstasks();

      }
  }

  location1.addEventListener("click", handleClick);
}

function createTomato() {
  // ground.setAttribute("cursor", "not-allowed");
  tomato.disabled=true;
  x3++;
  flag=true;
  // ground.addEventListener("click", createGround);
  // document.querySelector(".first-div").style.display='none';
  sum = sum - 200;
  location1 = document.getElementById("vect-div");
  location1.style.display = "block";
    location1.style.border = "1px solid black";
  location1.addEventListener("click", function (event) {
    if(flag){
      flag=false;
      image = document.createElement("img");
      image.src = "../images/tomato.png"
      image.setAttribute("draggable", "true");
      image.setAttribute("id", "tomato-image"+x1);
      image.style.width="auto";
      image.style.zIndex="2";
      image.style.position="absolute";
      location1.appendChild(image);
    //  image = document.querySelector("#ground-image"+x1);
    //  location = document.getElementById("ground-div");

    getClickPosition(event);

    // getPosition(event);
    // image.style.left = `${x}px`;
    // image.style.top = `${y}px`;
    image.style.display = 'block';
    createTomatoObject();
    //  ground.setAttribute("cursor", pointer);
     tomato.disabled=false;
     location1.style.border="none";
     elementstasks();

    } 
});
}
function createGround() {
    // ground.setAttribute("cursor", "not-allowed");
    if(sum>=100){
    ground.disabled=true;
    x1++;
    flag=true;
    // ground.addEventListener("click", createGround);
    // document.querySelector(".first-div").style.display='none';
    sum = sum - 100;
    location1 = document.getElementById("ground-div");
    location1.style.display = "block";
    location1.style.border = "1px solid black";
    location1.addEventListener("click", function (event) {
      if(flag){
        flag=false;
        image = document.createElement("img");
        image.src = "../images/ground.png";
        image.setAttribute("draggable", "true");
        image.setAttribute("id", "ground-image"+x1);
        image.style.width="auto";
        image.style.zIndex="2";
        image.style.position="absolute";
        location1.appendChild(image);
      //  image = document.querySelector("#ground-image"+x1);
      //  location = document.getElementById("ground-div");

      getClickPosition(event);

      // getPosition(event);
      // image.style.left = `${x}px`;
      // image.style.top = `${y}px`;
      image.style.display = 'block';
      createGroundObject();
      //  ground.setAttribute("cursor", pointer);
       ground.disabled=false;
       location1.style.border="none";
       elementstasks();
      } 
  });
  }
else
{
}
}
 let gr,fl,t; 

function createGroundObject() {
   gr={id:image.id,x:xPosition,y:yPosition,time:5000,eventListener:false}
  elements.push(gr);
}
 function createFlowerObject(){
  fl={id:image.id,x:xPosition,y:yPosition,eventListener:false}
  elements.push(fl);
 }
 function createTomatoObject(){
  t={id:image.id,x:xPosition,y:yPosition,eventListener:false}
  elements.push(t);
 }
// function getClickPosition(e) {
//   // let ref = e.target.closest('.clickDiv').getBoundingClientRect();
//   let ref=location1.getBoundingClientRect();
//   let pos = e.target.getBoundingClientRect();
//   let posY = pos.top - ref.top;
//   let posX = pos.left - ref.left;
//   x = posX;
//   y = posY;
// }
setInterval(updatesum,1000)
function updatesum(){
  
  document.querySelector(".sum-p").innerHTML='$'+sum;
}
let b1=setInterval(function() 
{
    if(sum<100)
    {
         let image=document.getElementById("buybutton1").children[0];
          image.src="../images/buybutton01.png";
          clearInterval(b1); 
          let status="negative";
           finishTheGame(status);
    }

    }, 1000);
  
let b2=setInterval(function() 
{
    if(sum<100)
    {
         let image=document.getElementById("buybutton2").children[0];
          image.src="../images/buybutton02.png";        
          clearInterval(b2);
          let status="negative";
           finishTheGame(status);
    }
                                      
}, 1000);

let b3=setInterval(function() 
{
    if(sum<200)
    {
         let image=document.getElementById("buybutton3").children[0];
          image.src="../images/buybutton03.png";
          clearInterval(b3);
    }
}, 1000);

document.querySelector(".store").addEventListener("click",function(){
    console.log("i am clicking");
    document.querySelector(".first-div").style.display='block';
})
document.getElementById("close").addEventListener("click",function(){
    document.querySelector('.first-div').style.display='none';
})


let  xPosition,yPosition;
function getClickPosition(e) {
	let parentPosition = getPosition(e.currentTarget);
	  xPosition = e.clientX - parentPosition.x - (image.clientWidth / 2);
	 yPosition = e.clientY - parentPosition.y - (image.clientHeight / 2);

	image.style.left = xPosition + "px";
	image.style.top = yPosition + "px";
}

 //Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  return {
    x: xPos,
    y: yPos
  };
}
//random num of task
let r=Math.floor(Math.random() * 9) + 1;
let ra=Math.floor(Math.random() * 9) + 1;
let tomato_amount=r,flower_amount=ra;
document.getElementById("tomato-amount").innerHTML =tomato_amount;
document.getElementById("flower-amount").innerHTML =flower_amount;



document.getElementById("menu-button").addEventListener("click",function(){
  console.log("i am clicking");
  window.location.href="./pouse.html";
})
// const timeImg=["../images/ti1.png","../images/ti2.png","../images/ti3.png"];
let timeImg="../images/ti1.png";
let where=1;


let countImg=3;
document.getElementById("before-starting").addEventListener("click",function(){

  document.getElementById('div-startbefore').style.visibility='visible'; 
})

document.querySelector('#house').addEventListener("dragstart",function(ev){
    ev.dataTransfer.setData("text1", ev.target.id);
    countImg--;
    console.log(countImg);
})
document.querySelector('#water').addEventListener("dragstart",function(ev){
    ev.dataTransfer.setData("text2", ev.target.id);
    countImg--;
    console.log(countImg);
})
document.querySelector('#boxes').addEventListener("dragstart",function(ev){
    ev.dataTransfer.setData("text3", ev.target.id);
    countImg--;
    console.log(countImg);
})


document.querySelector('#house').addEventListener("mousedown",function(){
  document.getElementById('div-drog1').style.visibility='visible';
  document.getElementById('div-drog1').style.border='solid red 2px';
})
document.querySelector('#water').addEventListener("mousedown",function(){
document.getElementById('div-drog2').style.visibility='visible';
document.getElementById('div-drog2').style.border='solid red 2px';

})
document.querySelector('#boxes').addEventListener("mousedown",function(){
document.getElementById('div-drog3').style.visibility='visible';
document.getElementById('div-drog3').style.border='solid red 2px';

})
document.querySelector('#house').addEventListener("mouseup",function(){
document.getElementById('div-drog1').style.border='none';
})
document.querySelector('#water').addEventListener("mouseup",function(){
document.getElementById('div-drog2').style.border='none';
})
document.querySelector('#boxes').addEventListener("mouseup",function(){
document.getElementById('div-drog3').style.border='none';
})
///////////////////////////////////

document.querySelector('#div-drog1').addEventListener("drop",function(){
    document.getElementById('div-drog1').style.border='none';
    event.preventDefault();
    var data = event.dataTransfer.getData("text1");
    event.target.appendChild(document.getElementById(data));
    let img1=document.querySelector("#house");
    img1.style.width='15vw';
    img1.style.height='20vh';
    // img1.style.right='12vw';
    img1.style.cursor="default";
    createhouseObject(); 
      if(countImg==0)
      {
          document.getElementById('before-starting').style.visibility='hidden'; 
      }
      console.log(elements[0]);
      elementstasks();
})    
document.querySelector('#div-drog2').addEventListener("dragover",function(ev){
ev.preventDefault();

})    
document.querySelector('#div-drog2').addEventListener("drop",function(ev){
    document.getElementById('div-drog2').style.border='none';
    document.querySelector("#water").style.width='15vw';
    document.querySelector("#water").style.height='20vh';
    // document.querySelector("#water").style.right='32vw';  
    document.getElementById('div-drog2').style.border='none';
    document.querySelector("#water").style.cursor="default";
    ev.preventDefault();
    createwaterObject();
    var data = ev.dataTransfer.getData("text2");
    ev.target.appendChild(document.getElementById(data));
      if(countImg==0)
      {
          document.getElementById('before-starting').style.visibility='hidden'; 
      }
      elementstasks();
});

document.querySelector('#div-drog3').addEventListener("dragover",function(ev){
    ev.preventDefault();
});
document.querySelector('#div-drog3').addEventListener("drop",function(ev){
  document.getElementById('div-drog3').style.border='none';
  document.querySelector("#boxes").style.width='15vw';
  document.querySelector("#boxes").style.height='20vh';
  // document.querySelector("#boxes").style.right='52vw';   
   document.getElementById('div-drog3').style.border='none';
  document.querySelector("#boxes").style.cursor="default";
  ev.preventDefault();
createboxObject();
var data = ev.dataTransfer.getData("text3");
ev.target.appendChild(document.getElementById(data));
  if(countImg==0)
  {
      document.getElementById('before-starting').style.visibility='hidden'; 
  }
    elementstasks();
})   ; 
document.querySelector('#div-drog1').addEventListener("dragover",function(ev){
ev.preventDefault();
})    
document.querySelector('#div-drog2').addEventListener("dragover",function(ev){
ev.preventDefault();
})
document.querySelector('#div-drog3').addEventListener("dragover",function(ev){
ev.preventDefault();
})  

let h,w,b; 
function createhouseObject(){
h={id:document.getElementById('house').id,y:100-document.getElementById('house').style.right,x:'78vw',eventListener:false}
elements.push(h);
}
function createwaterObject(){
w=  {id:document.getElementById('water').id,y:100-document.getElementById('house').style.right,x:'78vw',eventListener:false}
elements.push(w);
}
function createboxObject(){
b=  {id:document.getElementById('boxes').id,y:100-document.getElementById('house').style.right,x:'78vw',eventListener:false}
elements.push(b);
}
///////////////////

// js of timer
//  let countTimer=1;

// let timerSetI=setInterval(function(){
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








/* תהליכים:
שק כלשהו לא מחייב שום דבר לפני
שתילה מחייב שק כלשהו לפני 
איסוף מחייב ארגז ריק ביד +שתיל מוכן
בית מחייב ארגז אחד מלא לפחות




*/

let theThing,container,check;

function elementstasks(){
elements.forEach(element => {
  if(element.eventListener==false)
  {
    element.eventListener=true;
    document.getElementById(element.id).addEventListener("click",function(){
    moving(event,element);});
  }
});
}

theThing = document.querySelector("#thing");

function moving(e,element) {
  let parentPosition2 = getPosition(e.currentTarget);
   setParent(e.target.parentElement,theThing);

    check= document.createElement("img");
    check.classList.add("thing1");
    check.src="../images/check (2).png";
    var audio = new Audio('../sound/short-success-sound-glockenspiel-treasure-video-game-6346.mp3');
    audio.play();
    setParent(e.target.parentElement,check);
    check.style.top= parentPosition2.y+ "px";
    check.style.left = parentPosition2.x + "px";
 
    check.style.display="block";
    setTimeout(() => {
      check.style.display="none";
    }, 1000);

   setTimeout(function () {
    theThing.style.left = parentPosition2.x + "px";
    console.log(e.target.id.slice(0,6));
    
    if(e.target.id.slice(0,6)=="ground"){
       theThing.style.top = parentPosition2.y-e.target.clientHeight + "px";
    }
    else{
          theThing.style.top = parentPosition2.y+ "px";
    }
  }, 100); 
  
  addtask(e,check,element);

}

function setParent( newParent,child) {
  if (child.parentElement !== newParent) 
  {
    console.log(newParent);
    newParent.appendChild(child);
  }
}

//יהיה שווה לתמונה של הילדה עם ארגז מלא (עגבניות או פרחים) thing של src יתעדכן כאשר ה 
let flagHouse=false;

let tasks=[],k=0,docElement;
function addtask(e,check,element){
    docElement=document.getElementById(element.id);
    let el_id =element.id.slice(0,6)
    let el_id1 =element.id.slice(0,5)
    if(el_id==="tomato"||el_id==="flower"|| el_id1==="water"||el_id1==="boxes"){
      add(element,check);
    }
    else{
      if(el_id=="ground")
      {
        if(k>1)
        {
          if(docElement.src.slice(docElement.src.length-18,docElement.src.length)==="/images/ground.png")
          {
            if(tasks[k-1].id.slice(0,6)==="tomato"||tasks[k-1].id.slice(0,6)==="flower")
            {
              add(element,check);
            }
          }
          else
          {
            if((docElement.src.slice(docElement.src.length-25,docElement.src.length)==="/images/groundFlower2.png")
            ||(docElement.src.slice(docElement.src.length-26,docElement.src.length)==="/images/groundTommato3.png"))
            {
              if(tasks[k-1].id.slice(0,5)==="boxes")
              {
                add(element,check);
              }
            }
            else
            {
              if(docElement.src.slice(docElement.src.length-18,docElement.src.length)==="/images/thorns.png")
              {
                if(tasks[k-1].id.slice(0,5)==="water")
                {
                  add(element,check);
                }
              }
             
            }
          }
        } 
       else
       {
      //    let inter4,b4=1;

      //   function hideCheckElement()
      //    {
      //     if (b4 === 2) {
      //       check.style.display = "none";
      //       clearInterval(inter4);
      //     } else {
      //       b4++;
      //       console.log("be clearing in a while");
      //     }
      //   }
      
      // inter4 = setInterval(hideCheckElement, 300);
     } 
          
  }
  else
      {
        if(el_id1==="house"){
            if(flagHouse){
              add(element,check)
            }
        }
         else
              {
                let b=1;
                let inter1;
                
            }
      }
    }
}
//   function hideCheckElement()
//    {
//     if (b=== 2) {
//       check.style.display = "none";
//       clearInterval(inter1);
//     } else {
//       b++;
//       console.log("be clearing in a while");
//     }
//   }

// inter1 = setInterval(hideCheckElement, 1000);
  
// let b5 = 1;
// let inter2;
function add(element,check){
   tasks[k]=element;
   k++;
  
  //  inter2 = setInterval(hideCheckElement, 1000);
   changeElement(k,element,check);
}

// function hideCheckElement()
//    {
//     if (b5 === 2) {
//       check.style.display = "none";
//       clearInterval(inter2);
//     } else {
//       b5++;
//       console.log("be clearing in a while");
//     }
//   }

tasks.forEach(element1 => {
    console.log(element1);
});



//צריך לבדןק שבאמת אלו השמות והסיומות של התמונות כדי שלא יהיה שגיאות
let taskarr=[{name:"tomato_ground",time1:5000,numofimages:4,img1:"../images/groundTommato1.png",img2:"../images/groundTommato2.png",img3:"../images/groundTommato3.png",img4:"../images/ground.png",currentimg:1},
{name:"flower_ground",time1:10000,numofimages:3,img1:"../images/groundFlower1.png",img2:"../images/groundFlower2.png",img4:"../images/ground.png", currentimg:1},
{name:"housearr",time1:1000,numofimages:2,img1:"../images/huose.png",currentimg:1},
{name:"waterarr",time1:1000,numofimages:2,img1:"../images/water.png",currentimg:1},
{name:"girlboxarr",time1:1000,numofimages:3,img1:"../images/box.png",currentimg:1},//חסר תמונה של הקופסאות המלאות עם פרחים ועם עגבניות וגם תמונה ריקה עם קופסה וגם ילדה בלי קופסא -סה"כ 4 תמונות
{name:"ground_box",time1:2000,numofimages:2,img1:"../images/ground.png",currentimg:1},
{name:"tomatobagarr",time1:5000,numofimages:1,img1:"../images/tomato.png",currentimg:1},
{name:"flawerbagarr",time1:5000,numofimages:1,img1:"../images/flower.png",currentimg:1},
{name:"water_ground",time1:5000,numofimages:3,img1:"../images/thorn.png",img2:"../images/water_ground.png",img3:"../image/ground.png",currentimg:1}]
let currentimg=0,el;

function remove2LastElements(k){
  tasks.splice(k-1,2);
  k=tasks.length-1;
  return k;
}

function changeElement(k,element,check)
{
  // tasks.forEach(task => {  
  let len=element.id.length;
  el=element ;
  
  
      if(el.id.slice(0,6)== "ground") 
      {
          if(tasks[k-2].id.slice(0,6)==="flower")
          {
            setIntervalfunction(el,1,check);
            k=remove2LastElements(k);
          }
          else
          {
            if(tasks[k-2].id.slice(0,6)==="tomato"){
              setIntervalfunction(el,0,check);
              k=remove2LastElements(k);
            }
            else{
              if(tasks[k-2].id.slice(0,5)==="water"){
                setIntervalfunction(el,8,check);
                k= remove2LastElements(k);
              }
              else
              {
                let interval=0,documelement=document.getElementById(el.id);
                let s=setInterval(() => {
                  if(interval===1){
                    if(documelement.src.slice(documelement.src.length-17,documelement.src.length)==="groundFlower2.png")
                    {
                        document.getElementById("thing").src="../images/full_box_flower.png";
                    }
                    else{
                      document.getElementById("thing").src="../images/full_box_tomato.png";
                    }
                    flagHouse=true;
                    setIntervalfunction(el,5,check);
                    k= remove2LastElements(k);
                  }
                if(interval===2){
                     clearInterval(s);
                }
                interval++;
                }, 2000);
  
              }
            }
          }     
        }  
        else{
          if(el.id.slice(0,6)== "flower")
          {
            document.getElementById("thing").src="../images/flower_bag.png";
            setIntervalfunction(el,7,check);
          }
          if(el.id.slice(0,6)== "tomato") {
            document.getElementById("thing").src="../images/tomato_bag.png";
            setIntervalfunction(el,7,check);
          }
          else{
             if(el.id.slice(0,5)=="water")
              {
                setIntervalfunction(el,3,check);
              }
              else{
                if(el.id.slice(0,5)=="boxes"){
                  document.getElementById("thing").src="../images/empty_box.png";
                }
              }
          }
          if(el.id.slice(0,5)==="house"){
            if(document.getElementById("thing").src.slice(document.getElementById("thing").src.length-10,document.getElementById("thing").src.length)==="tomato.png"&&tomato_amount>0){
                tomato_amount=tomato_amount-1;
                document.getElementById("tomato-amount").innerHTML=tomato_amount;
                var audio = new Audio('../sound/winning-magic-sound-effect.mp3');
            audio.play();
            flagHouse=false;
            }
            else{
              if(flower_amount>0){
              flower_amount=flower_amount-1;
              document.getElementById("flower-amount").innerHTML =flower_amount;  
              var audio = new Audio('../sound/winning-magic-sound-effect.mp3');
            audio.play(); 
            flagHouse=false; 
            }  
           }
           if(tomato_amount===0 &&flower_amount===0){
               let state = "positive";
               finishTheGame(state);
           }
            document.getElementById("thing").src="../images/girlStand.png";
            //animation - well done
            //audio -well done
             
            sum+=300;
           k= remove2LastElements(k);

          }
         
        }
      
      
      // });
}
    let tmp3;
      
function setIntervalfunction(el,i,check){
  let currentimg=1;

  let l=setInterval(function(){
    if(currentimg==taskarr[i].numofimages){
      taskarr[i].currentimg=1;
      clearInterval(l);
      // check.style.display="none";
    }
    else{
      tmp3=taskarr[i].currentimg;
      let image1="img"+tmp3;
      let docuelement=document.getElementById(el.id);
      docuelement.src=taskarr[i][image1];
      currentimg++;
      if(taskarr[i].currentimg==taskarr[i].numofimages)
      {
        taskarr[i].currentimg==1;
      }
      else{
              taskarr[i].currentimg++;
      }
    }
    // removeElement(i);
  },taskarr[i].time1/taskarr[i].numofimages);
}

                                        
                                        
//:id- לכל אלמנט                                        
//ground-image-אדמה
//flower-image-פרחים
//tommato-image-עגבניות
//house-בית
//water-באר
//boxes-ארגזים                                      
//flower-שק פרחים
//tomato-שק עגבניות


function finishTheGame(state) {
  ending(state);
  updateScore();
  let finishInterval=setTimeout(() => {
      window.location.href = './highscore.html';
  }, 4000);
 
}

function ending(state) {
  if (state == "positive") {
      // Create a broadcast channel
      const broadcastChannel = new BroadcastChannel('audio-control');

     // Send a message to stop the audio
      broadcastChannel.postMessage({ action: 'stopAudio' });
      let audio = new Audio("../sound/reactos-boot-85864.mp3");
      audio.play();
      document.querySelector("#animatedImage").style.display="block";
      const animatedImage = document.getElementById("animatedImage");
      const screenHeight = window.innerHeight;
      const targetHeight = screenHeight * 0.6;
      let scale = 0.1;
      let isAnimating = true;

      function animate() {
          if (isAnimating && scale < 1) {
              scale += 0.01;
              animatedImage.style.transform = `scale(${scale}) translate(20%, -50%)`;
              
              // Center the image using translate and adjust scale increment as needed
              if (scale >= 1) {
                  isAnimating = false; // Stop growing when scale reaches 1
                  jump(); // Perform jump animation after growing
              } else {
                  requestAnimationFrame(animate);
              }
          }
      }

      function jump() {
          // animatedImage.style.animation = 'jump 0.3s ease-in-out';
          // setTimeout(() => {
          //     animatedImage.style.animation = 'none'; // Reset animation to none
          // }, 300);
      }

      animate();
  } else {
      // Handle the negative state if needed
  }
}

function updateScore() {
  let sum = 100; // For example
  let currentplayer = JSON.parse(localStorage.getItem('players'));
  currentplayer[0].money = sum;
  localStorage.setItem('players', JSON.stringify(currentplayer));
}















/* תהליכים:
שק כלשהו לא מחייב שום דבר לפני
שתילה מחייב שק כלשהו לפני 
איסוף מחייב ארגז ריק ביד +שטיל מוכן
בית מחייב ארגז אחד מלא לפחות




*/