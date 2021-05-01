var button=document.querySelector('.button')
var circle=document.querySelector('.circle')

button.addEventListener('click',e=>{
    var x = e.clientX;
    var y = e.clientY;
        var ripple=document.createElement('span')
        ripple.classList.add('circle')
        ripple.style.position='absolute'
        ripple.style.top=`${y-button.offsetTop}px`;
        ripple.style.left=`${x-button.offsetLeft}px`;
        button.append(ripple) ;
        setTimeout(()=>ripple.remove(),500)
})