const textEl=document.querySelector('#text')
const speedEl=document.querySelector('input')
const text='We love programming!'
let idx=1 ;
let speed= 300/speedEl.value ;

function writeText(){
     speed= 300/speedEl.value ;
    textEl.innerText=text.slice(0,idx) ;
    idx++ ; 
    if(idx>text.length) idx=1 ;
    setTimeout(writeText,speed)
}

writeText()