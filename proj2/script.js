var line=document.querySelector('.progress-line') ;
var circles=document.querySelectorAll('.progress-step') ;
var next=document.querySelector('#next') ;
var prev=document.querySelector('#prev') ;
var active=document.querySelectorAll('.active')

var cnt=1 ;

    next.addEventListener('click',()=>{
        cnt++ ;
        if(cnt>circles.length){
            cnt=circles.length ;
            next.disabled=true ;
         } 
        else{
            line.style.width=((cnt-1)/(circles.length-1))*100+'%'
            next.disabled=false ;
            prev.disabled=false ;
        }
         update(circles) ;
    })

    prev.addEventListener('click',()=>{
        cnt-- ;
         if(cnt<1){
            cnt=1 ;
            prev.disabled=true ;
         } 
        else{
            line.style.width=((cnt-1)/(circles.length-1))*100+'%'
            prev.disabled=false ;
            next.disabled=false ;
        }
         update(circles) ;
    })


const update=circles=>{
    circles.forEach((ele,ind) => {
        if(ind<cnt) {
            ele.classList.add('active')
        }
        else {
            ele.classList.remove('active')
        }
       
    });
    
}