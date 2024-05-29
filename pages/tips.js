let temp=1;
document.getElementById("back").addEventListener("click",function(){
    if(temp==1)
    {
        temp=9;
    }
    else{
        temp--;  
    }
    let img1=document.getElementById('imgTip');
    let v='../tips/'+temp+'.png';
    img1.src=v;
})
document.getElementById("next").addEventListener("click",function(){
    if(temp==9)
    {
        temp=1;
    }
    else{
        temp++;  
    }
    let img1=document.getElementById('imgTip');
    let v='../tips/'+temp+'.png';
    img1.src=v;
})
document.getElementById("ok").addEventListener("click",function(){
    document.querySelector('#tips').style.display='none';
    document.querySelector('#pagepouse').style.display='block';

})