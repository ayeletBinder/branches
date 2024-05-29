document.querySelector("#continue").addEventListener("click",function(){
    document.querySelector('#pagepouse').style.display='none';
  })
  
  document.querySelector("#option").addEventListener("click",function(){
    console.log("yes");
    document.querySelector('.modal').style.display='block';
    document.querySelector('#pagepouse').style.display='none';
        document.querySelector('#tips').style.display='none';
  })
  
  document.querySelector("#tips1").addEventListener("click",function(){
      document.querySelector('#tips').style.display='block';
      document.querySelector('#pagepouse').style.display='none';
  
  })
  document.querySelector("#menu").addEventListener("click",function(){
      window.location.href='./myfarm.html';
  })