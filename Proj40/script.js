const container=document.querySelector('.boxes')
const button=document.querySelector('#btn')

button.addEventListener('click',()=>container.classList.toggle('big'))

function createBoxes(){
     for(let i=0;i<4;i++){
         for(let j=0;j<4;j++){
            const newBox=document.createElement('div') ;
            newBox.classList.add('box')
            let y=i*125 ; let x=j*125 ;
            newBox.style.backgroundPosition=`-${x}px -${y}px`
            console.log(newBox)
            container.append(newBox)
         }
     }
}

createBoxes() 