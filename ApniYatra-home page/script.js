var openbt=document.querySelector('#open')
var closebt=document.querySelector('#close')
var container=document.querySelector('.cover-container')

openbt.addEventListener('click',()=>{
    container.classList.add('rotate') ;
})

closebt.addEventListener('click',()=>{
    container.classList.remove('rotate') ;
})