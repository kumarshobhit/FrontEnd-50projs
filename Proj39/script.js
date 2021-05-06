const image=document.querySelector('#background')
const password=document.querySelector('#password')

password.addEventListener('keyup',e=>{
    image.style.filter=`blur(${20-e.target.value.length}px)`
})