const toggles=document.querySelectorAll('.toggle')
const good=document.querySelector('#good')
const cheap=document.querySelector('#cheap')
const fast=document.querySelector('#fast')
 
toggles.forEach(ele=>ele.addEventListener('change',e=>fun(e.target))) ;

const fun=target=>{
    if(good.checked && cheap.checked && fast.checked){
        if(target===good) good.checked=false ;
        if(target===cheap) cheap.checked=false ;
        if(target===fast) fast.checked=false ;
    }
}