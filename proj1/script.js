const panels=document.querySelectorAll('.panel')
panels.forEach((p)=>{
    p.addEventListener('click',()=>{
        removeClasses(panels)
        p.classList.add('active')
    })
})

const removeClasses=panels=>{
    panels.forEach((p)=>{
        p.classList.remove('active')
    })
}