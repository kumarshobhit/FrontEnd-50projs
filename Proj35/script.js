const left=document.querySelector('#left')
const right=document.querySelector('#right')
const container=document.querySelector('#imgs')
const images=document.querySelectorAll('img')
let  idx=0 ;

right.addEventListener('click',()=>{
    idx++ ;
    showImg() ;
    reset()
})

left.addEventListener('click',()=>{
    idx-- ; 
    showImg() ;
    reset()
})

let interval=setInterval(run,2000)

function run(){
    idx++ ;
    showImg() ;
}


function showImg(){
    if(idx==images.length) idx=0 ;
  if(idx<0) idx=images .length-1 ;   
   container.style.transform=`translateX(${-idx*500}px)`
}

function reset(){
    clearInterval(interval) 
    interval=setInterval(run,2000)
}

