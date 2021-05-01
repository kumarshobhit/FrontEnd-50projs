var left=document.querySelector('#left')
var right=document.querySelector('#right')
var images=document.querySelectorAll('.slide')
var index=0 ;
right.addEventListener('click',()=>{
    index++ ; if(index==images.length) index=0 ;
    removeClass(index) 
     setBg(images[index])
})

left.addEventListener('click',()=>{
    index-- ; if(index<0) index=images.length-1 ;
    removeClass(index) 
     setBg(images[index])
})


setBg(images[0])
function setBg(image){
    document.body.style.backgroundImage=image.style.backgroundImage;
}

function removeClass(index){
    images.forEach(element => {
        element.classList.remove('active')
    });
images[index].classList.add('active')
}