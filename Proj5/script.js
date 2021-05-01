var loadingTest=document.querySelector('.loading-text') 
var bg=document.querySelector('.bg') 
var load=0
var id=setInterval(blur,30) 
function blur(){
    load++ ;
    loadingTest.innerHTML=`${load}%` 
    loadingTest.style.opacity=scale(load,0,100,1,0)
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
    if(load==100) clearInterval(id)
}

function scale(x,a,b,c,d){
    const R = (d-c)/(b-a)
const y = c+(x*R)+R
return(y)
}