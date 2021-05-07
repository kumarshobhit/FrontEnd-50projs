const codes=document.querySelectorAll('.code')
codes[0].focus() ;

codes.forEach((ele,idx)=>{
    ele.addEventListener('keydown',e=>{
        if(e.key>=0 && e.key<=9){
            e.target.value=' '
            setTimeout(()=>codes[idx+1].focus(),10)
        } 
        else if(e.key==='Backspace'){
            setTimeout(()=>codes[idx-1].focus(),10)
        }
    })
})