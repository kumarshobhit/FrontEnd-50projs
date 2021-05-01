const button=document.querySelector('#button')
const toasts=document.querySelector('#toasts')

const messages = [
    'Message One','Message Two','Message Three','Message Four'
]

button.addEventListener('click',()=>createNot('this is invalid data','info'))

const createNot=(message=null,type=null) =>{
    var rand=Math.floor(Math.random()*messages.length) ;
    const div=document.createElement('div') ;
    div.classList.add('toast') ;
    div.classList.add(type?type:'info')
    div.innerText=message?message:messages[rand] ;
    toasts.append(div) ;

    setTimeout(()=>{
        div.remove()
    },3000)
}