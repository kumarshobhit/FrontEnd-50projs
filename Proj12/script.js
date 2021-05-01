var buttons=document.querySelectorAll('.faq-toggle')

buttons.forEach(ele => {
    ele.addEventListener('click',()=>{
    ele.parentNode.classList.toggle('active') ;
    })
});