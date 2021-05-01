var textarea=document.querySelector('#textarea')
var tags=document.querySelector('#tags')
textarea.focus() ;

textarea.addEventListener('keyup',e=>{
    if(e.key=='Enter'){
        setTimeout(()=>{
            randomSelect()
        },100)
    }
   else  fun(e.target.value)
})

function fun(word){
    var words=word.split(',').filter(ele=>ele.trim()!=='').map(ele=>ele.trim()) ;
    tags.innerHTML=''
    words.forEach(w => {
    var child=document.createElement('span')
    child.innerHTML=w
    child.classList.add('tag')
    tags.append(child)
    });
}

function randomSelect(){
     const times=30 

     const interval=setInterval(()=>{
        const randomTag=selRandom()
        randomTag.classList.add('highlight')
        setTimeout(()=>randomTag.classList.remove('highlight'),100)
     },100)

     setTimeout(()=>{
        clearInterval(interval)
        const randomTag=selRandom()
        randomTag.classList.add('highlight')
     },times*100)
}

function selRandom(){
var alltag=document.querySelectorAll('.tag')
return alltag[Math.floor(Math.random()*alltag.length)]
}