const nums=document.querySelectorAll('.nums span')
const counter=document.querySelector('.counter')
const final=document.querySelector('.final')
const replay=document.querySelector('#replay')

runAnimation()

function runAnimation(){
    nums.forEach((ele,idx)=>{
        ele.addEventListener('animationend',e=>{
            if(e.animationName=== 'goIn'){
                ele.classList.remove('in')
                ele.classList.add('out')
            }
            else if(e.animationName=='goOut' && idx!==nums.length-1){
                ele.nextElementSibling.classList.add('in')
            }
            else {
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}