const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 4;
let color = "black";
let isPressed = false;
let x, y, x1, y1, x2, y2;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); //(x,y,yarıçap,başlangış açısı,bitiş açısı)
  ctx.fillStyle = color;
  ctx.fill();
}
// drawCircle(200,200)
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); //başlangış noktaları
  ctx.lineTo(x2, y2); //bitiş noktaları
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}
// drawLine(150,0,100,200)

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
//   console.log(x, y);
  drawCircle(x, y);
});
 
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  // console.log(x,y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
    }
});

const decreaseBtn=document.getElementById("decrease");
const sizeİnner=document.getElementById("size");
const increaseBtn=document.getElementById("increase");
const colorBtn=document.getElementById("color");
const clearBtn=document.getElementById("clear");

decreaseBtn.addEventListener("click",()=>{
    if(size>2){
        size-=2;   
        increaseBtn.style.color="#fff";
    }else if(size===2){
        decreaseBtn.style.color="#000";
    }
    updateSize()
})
increaseBtn.addEventListener("click",()=>{
    if(size<24){
        size+=2; 
        decreaseBtn.style.color="#fff";
    }else if(size===24){
        increaseBtn.style.color="#000";
    }
    updateSize()
})

function updateSize(){
    sizeİnner.innerText=size
}

colorBtn.addEventListener("change",(e)=>{
    color=e.target.value
    // console.log(e.target.value);
})

clearBtn.addEventListener("click",()=>{
    ctx.clearRect(0, 0, canvas.width,canvas.height)
})