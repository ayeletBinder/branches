
//צריך לבדןק שבאמת אלו השמות והסיומות של התמונות כדי שלא יהיה שגיאות
1={name:tomatoarr,time1:5000,numofimages:4,img1:"../image/groundTommato1.png",img2:"../image/groundTommato2.png",img3:"../image/groundTommato3.png",img4:"../image/ground.png"};
2={name:flowerarr,time1:10000,numofimages:3,img1:"../image/groundFlower1.png",img2:"../image/groundFlower2.png",img4:"../image/ground.png"};
3={name:housearr,time1:1000,numofimages:2,img1:"../image/huose.png"};
4={name:waterarr,time1:1000,numofimages:2,img1:"../image/water.png"};
5={name:girlboxarr,time1:1000,numofimages:3,img1:"../image/box.png"};//חסר תמונה של הקופסאות המלאות עם פרחים ועם עגבניות וגם תמונה ריקה עם קופסה וגם ילדה בלי קופסא -סה"כ 4 תמונות
6={name:groundarr,time1:5000,numofimages:1,img1:"../image/ground.png"};
7={name:tomatobagarr,time1:5000,numofimages:1,img1:"../image/tomato.png"};
8={name:flawerbagarr,time1:5000,numofimages:1,img1:"../image/flower.png"};
let taskarr=[1,2,3,4,5,6,7,8];



let currentimg=0;
function changeElement(index,el)//הפונקציה מקבלת: מיקום במערך ואלמנט
{   
  let len=el.id.length; 
  if(el.id.slice(len-6,len)=="-image")
  {
      if(el.id.slice(0,len-6)== "ground") 
      {
          setIntervalfunction(el,6);
      }                 
      if(el.id.slice(0,len-6)== "flower") 
      {
        setIntervalfunction(el,2);
      }
      else{
        setIntervalfunction(el,1);
      }                                    
  }
  else{
    if(el.id.slice(0,14)=="img-startbefore")
    {
      if(el.id.slice(14,15)=="1")
      {
        setIntervalfunction(el,3);
      }
      if(el.id.slice(14,15)=="2")
      {
        setIntervalfunction(el,4);
      }
    }

  }
  if(el.id=="flower")
  {
    setIntervalfunction(el,7);
  }
  if(el.id=="tomato")
  {
    setIntervalfunction(el,8);
  }      
  if(el.id=="girl-box")
  {
    setIntervalfunction(el,5);
  }                      
}

function setIntervalfunction(el,i){
  let currentimg=0;
  let l=setInterval(function(){
    if(currentimg==taskarr[i].numofimages){
      clearInterval(l);
    }
    else{
      let image1=img+el.sumofimage-currentimg;
      el.src=taskarr[i].image1;
      currentimg++;
    }
    removeElement(i);
  },taskarr[i].time1/taskarr[i].numofimages);
}
/////////////////remove from the array
// function removeElement(i){
//   if(){
    
//   }
// }
                                        
                                        
//:id- לכל אלמנט                                        
//ground-image-אדמה
//flower-image-פרחים
//tommato-image-עגבניות
//img-startbefore1-בית
//img-startbefore2-באר
//girl-box ארגזים                                     
//flower-שק פרחים
//tomato-שק עגבניות









