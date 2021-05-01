var value=document.querySelectorAll('.counter')
value.forEach(ele => {
    ele.innerText='0'
   
    const update=()=>{
        var target=+ele.getAttribute('data-target') 
        var c=+ele.innerText
        var inc=target/200 ; inc=Math.floor(inc) ;
        if(c<target){
            ele.innerText=`${c+inc}`
            setTimeout(update,1) ;
        }
    }
    update()
   
});
