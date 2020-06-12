var direct;
document.addEventListener("keydown",course);
function course(event){
    if(event.keyCode == 37&& direct!="RIGHT")
    {//|| 65
        direct="LEFT";
    }
    if(event.keyCode == 38 && direct !="DOWN")
    {//||87 &&
        direct="UP";
    }
    if(event.keyCode == 40 && direct !="UP")
    {//||83
        direct="DOWN";
    }
    if(event.keyCode == 39 && direct != "LEFT")
    {//||68
        direct="RIGHT"
    }
}