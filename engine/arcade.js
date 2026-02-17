export function loadArcade(mode, canvas, ctx, keys) {

function snake() {
  let snake=[{x:200,y:200}], food={x:100,y:100}, dx=20, dy=0;
  setInterval(()=>{
    ctx.fillStyle="#111";
    ctx.fillRect(0,0,600,400);
    ctx.fillStyle="lime";
    snake.forEach(s=>ctx.fillRect(s.x,s.y,20,20));
    ctx.fillStyle="red";
    ctx.fillRect(food.x,food.y,20,20);
    if(keys["ArrowUp"]){dx=0;dy=-20;}
    if(keys["ArrowDown"]){dx=0;dy=20;}
    if(keys["ArrowLeft"]){dx=-20;dy=0;}
    if(keys["ArrowRight"]){dx=20;dy=0;}
    let head={x:snake[0].x+dx,y:snake[0].y+dy};
    if(head.x===food.x && head.y===food.y){
      food={x:Math.floor(Math.random()*20)*20,y:Math.floor(Math.random()*20)*20};
    } else snake.pop();
    snake.unshift(head);
  },100);
}

function pong() {
  let paddle=150, ball={x:300,y:200,vx:4,vy:4};
  function loop(){
    ctx.fillStyle="#111";
    ctx.fillRect(0,0,600,400);
    if(keys["ArrowUp"]) paddle-=6;
    if(keys["ArrowDown"]) paddle+=6;
    ctx.fillStyle="white";
    ctx.fillRect(20,paddle,10,80);
    ball.x+=ball.vx;
    ball.y+=ball.vy;
    if(ball.y<0||ball.y>400) ball.vy*=-1;
    if(ball.x<40 && ball.y>paddle && ball.y<paddle+80) ball.vx*=-1;
    if(ball.x>600) ball={x:300,y:200,vx:4,vy:4};
    ctx.fillRect(ball.x,ball.y,10,10);
    requestAnimationFrame(loop);
  }
  loop();
}

if(mode==="snake") snake();
if(mode==="pong") pong();
}
