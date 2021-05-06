const buttons=document.querySelectorAll('li')
const images=document.querySelectorAll('img')

    buttons.forEach((ele,idx)=>{
        ele.addEventListener('click',()=>{
            removeClass() ;
            ele.classList.add('active')
            images[idx].classList.add('show')
        })
    })

function removeClass(){
    buttons.forEach((ele,idx)=>{
            ele.classList.remove('active')
            images[idx].classList.remove('show')
    })
}