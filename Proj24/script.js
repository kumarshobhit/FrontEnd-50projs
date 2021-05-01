var header=document.querySelector('#header')
var title=document.querySelector('#title')
var excerpt=document.querySelector('#excerpt')
var profile_img=document.querySelector('#profile_img')
var namep=document.querySelector('#name')
var date=document.querySelector('#date')
var animatedBg=document.querySelectorAll('.animated-bg')
var animatedText=document.querySelectorAll('.animated-bg-text')

setTimeout(getData,3000)

function getData(){

    animatedBg.forEach(ele => {
        ele.classList.remove('animated-bg')
    });
    animatedText.forEach(ele => {
        ele.classList.remove('animated-bg-text')
    });
    
    header.innerHTML='<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="">'
    title.innerText='Lorem ipsum dolor, sit amet '
    excerpt.innerText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, odit!'
    profile_img.innerHTML=' <img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="">'
    namep.innerText='John Doe'
    date.innerText='Oct 08, 2020'

   
}