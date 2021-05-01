var  canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var inputColor=document.querySelector('#color')
var inc=document.querySelector('#increase')
var dec=document.querySelector('#decrease')
var clear=document.querySelector('#clear')
var text=document.querySelector('#size')

let color='black' ;
let x ; 
let y ;
let size=10
let isPressed=false 

inputColor.addEventListener('change',e=>{
    console.log(e)
    color=`${inputColor.value}` ;
}) ;

inc.addEventListener('click',()=>{
    size++
    if(size>10) size=10 ;
    text.innerText=""+size 
})
dec.addEventListener('click',()=>{
    size--
    if(size<5) size=5 ;
    text.innerText=""+size 
})

clear.addEventListener('click',()=>{
ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener('mousedown',e=>{
    isPressed=true ;
    x=e.offsetX
     y=e.offsetY
})

canvas.addEventListener('mouseup',e=>{
    isPressed=false;
    x=undefined
    y=undefined
})

canvas.addEventListener('mousemove',e=>{
    if(isPressed){
        let x2=e.offsetX
        let y2=e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2) 
        x=x2 ; y=y2 ;
        
    }
    
})


function drawCircle(x,y){
    ctx.beginPath() ;
    ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle=color
    ctx.fill()
}

function drawLine(xs,ys,xe,ye){
    ctx.strokeStyle = color ;
    ctx.beginPath();
    ctx.moveTo(xs, ys);
    ctx.lineTo(xe, ye);
    ctx.lineWidth=2*size
    ctx.closePath();
    ctx.stroke();
}

