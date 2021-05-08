const ratings=document.querySelectorAll('.rating')
const sendBtn=document.querySelector('#send')
const panel=document.querySelector('#panel')
const container=document.querySelector('.ratings-container')
let  response='Saitisfied'
//event propogation
container.addEventListener('click',e=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        response=e.target.nextElementSibling.innerText
        console.log(response)
    }
})

function removeActive(){
    ratings.forEach(ele=>{
        ele.classList.remove('active')
    })
}

sendBtn.addEventListener('click',()=>{
    panel.innerHTML=`
    <i class="fas fa-heart"> </i>
    <strong>Your response is : ${response}
            <br> We wish to further improve your experience
        </strong>
    `
})