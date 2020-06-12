const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
var box=40;
var image= new Image();
image.src="fruit.png";
var snake=[];
snake[0]={x:8*box, y: 8*box};
snake[1]={x:8*box, y: 9*box};
var score=0;
//losowanie pozycji jablka
var min=1; 
var max=13;  
var apple ={ x:(Math.floor(Math.random() * (+max - +min)) + +min)*box,
    y:(Math.floor(Math.random() * (+max - +min)) + +min)*box  }; 
function appleRandom()
{
    apple ={ x:(Math.floor(Math.random() * (+max - +min)) + +min)*box,
        y:(Math.floor(Math.random() * (+max - +min)) + +min)*box  };
}
var direct;
document.addEventListener("keydown",course);
function course(event){
    if(event.keyCode == 37&& direct!="RIGHT")
    {console.log(event);//|| 65
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
function gameover(){
    clearInterval(startGame);
    if(confirm("GAME OVER \n One more time?"))
    {
        location.reload();
    }
}
//ctx.drawImage(image,3*box,3*box,box,box)
function Draw(){
    for(let i=0;i<15;i++)
    {
        for(let j=0;j<15;j++)
        {
            ctx.fillStyle= "white";
            ctx.fillRect(i*box,j*box,box,box);
            ctx.strokeStyle="black";
            ctx.strokeRect(i*box,j*box,box,box);
        }
    }
    for(let i=0;i<snake.length;i++)
    {
        ctx.fillStyle= (i==0) ? "red" : "blue";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
    }
    ctx.drawImage(image,apple.x,apple.y);
    
    if(direct=="UP")
    {
        snake.pop()
        snake.unshift({x:snake[0].x, y:snake[0].y-box})
    }
    if(direct=="DOWN")
    {
        snake.pop()
        snake.unshift({x:snake[0].x, y:snake[0].y+box})
    }
    if(direct=="LEFT")
    {
        snake.pop()
        snake.unshift({x:snake[0].x-box, y:snake[0].y})
    }
    if(direct=="RIGHT")
    {
        snake.pop()
        snake.unshift({x:snake[0].x+box, y:snake[0].y})
    }

    // sprawdzenie kolizji
    if(snake[0].x+box/2 == apple.x+box/2 && snake[0].y+box/2==apple.y+box/2)
    {console.log('Snake' + snake[0].x +
        snake[0].y +'Apple'+ apple.x + apple.y);
        if(direct=="UP")
        {
            appleRandom();
            snake.unshift({x:snake[0].x, y:snake[0].y-box});
            score++;
        }
        if(direct=="DOWN")
        {
            appleRandom();
            snake.unshift({x:snake[0].x, y:snake[0].y+box});
            score++;
        }
        if(direct=="LEFT")
        {
            appleRandom();
            snake.unshift({x:snake[0].x-box, y:snake[0].y});
            score++;
        }
        if(direct=="RIGHT")
        {
            appleRandom();
            snake.unshift({x:snake[0].x+box, y:snake[0].y});
            score++;
        }
    }
    ctx.clearRect(660, 180, canvas.width, canvas.height);
    ctx.font="50px Comic Sans MS";
    ctx.fillStyle="red";
    

    ctx.fillText(String(score), 700,230);
    ctx.drawImage(image,695,135);


    // kolizje za sciana
    if(snake[0].x> 15*box || snake[0].y>15*box ||snake[0].x< -box || snake[0].y<-box )
    {
        gameover();
    }

    for(let i=1;i<snake.length;i++)
    {   if(snake.length>3)
        {
        if(snake[0].x+box/2 == snake[i].x+box/2 && snake[0].y+box/2 == snake[i].y+box/2)
        {
            gameover();
        }}
    }
}

let startGame=setInterval(Draw,250);
