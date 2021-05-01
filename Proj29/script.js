const loveme=document.querySelector('.loveme') ;
const times=document.querySelector('#times')
var lastClick=0 ;
var time=0 ;
loveme.addEventListener('click',e=>{
var d=new Date() ;
var t=d.getTime() ;
if(!lastClick) lastClick=t ;
else {
    if(t-lastClick<800){
        time++ ;
        times.innerText=`${time}` ;
        createHeart(e) ;
        lastClick=0 ;
    } 
    else lastClick=t ;
}

})


const createHeart=e=>{
    var x = e.clientX;
    var y = e.clientY;
    const heart=document.createElement('i') ;
    heart.classList.add('fas') ;
    heart.classList.add('fa-heart')
        heart.style.top=`${y-loveme.offsetTop}px`;
        heart.style.left=`${x-loveme.offsetLeft}px`;
        loveme.append(heart) ;
        setTimeout(()=>heart.remove(),500)
}
