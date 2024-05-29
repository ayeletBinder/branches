let vid = document.getElementById("myVideo");
vid.autoplay = true;
vid.load();
let count=0;
function next()
{ 
    if(count==3)
    {
        vid.currentTime=112;
        count++;
        displaybutton()
    }
    if(count==2)
    {
        vid.currentTime=91;
        count++;
    }
    if(count==1)
    {
        vid.currentTime=64;
        count++;
    }
    if(count==0)
    {
        vid.currentTime=36;
        count++;
    }
}
function skip()
{
    vid.currentTime=114;
    displaybutton()
}
function displaybutton()
{
    document.getElementById("next").style.display='none';
    document.getElementById("skip").style.display='none';
    document.getElementById("continue1").style.display='block';
}
document.getElementById("continue1").addEventListener("click",function(){
    window.open("./start.html");
})