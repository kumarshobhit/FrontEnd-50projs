const container=document.querySelector('#container')
const colors=['#F94144','#F3722C','#F8961E','#F9C74F','#90BE6D','#43AA8B','#577590']
const squares=500 

for(let i=0;i<500;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseout',()=>removeColor(square))
    container.append(square)
}

function setColor(square){
square.style.background=randomColor()
}

function removeColor(square){
square.style.background='#1d1d1d'
}

function randomColor(){
    const color=colors[Math.floor(Math.random()*colors.length)]
    return color ;
}