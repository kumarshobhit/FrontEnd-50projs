var nav=document.querySelector('.nav')


window.addEventListener('scroll',changeNav)

function changeNav(){
    var topNav=window.scrollY;
    if (topNav > 50) nav.classList.add('active')
    else nav.classList.remove('active')

}