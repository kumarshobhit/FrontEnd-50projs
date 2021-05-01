var boxes=document.querySelectorAll('.block')

check() ;
window.addEventListener('scroll',check)

function check (){
    const triggerH=window.innerHeight/5*4 
    boxes.forEach(element => {
       var  domRect = element.getBoundingClientRect().top
       if(domRect<triggerH) element.classList.add('show')
       else element.classList.remove('show')
} )
}