const container=document.querySelector('.slider-container')
const rightSlide=document.querySelector('.right-slide')
const leftSlide=document.querySelector('.left-slide')
const upButton=document.querySelector('.up-button')
const downButton=document.querySelector('.down-button')
const slidesLength=leftSlide.querySelectorAll('div').length
let index=0 ;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click',()=>changeSlide('up'))
downButton.addEventListener('click',()=>changeSlide('down'))

const changeSlide=direction=>{
    const sliderHeight=container.clientHeight ;
    if(direction==='up'){
        index++ ; 
        if(index==slidesLength) index=0 ;
    }
    if(direction==='down'){
        index-- ; 
        if(index<0) index=slidesLength-1 ;
    }
    rightSlide.style.transform=`translateY(-${index*sliderHeight}px)`
    leftSlide.style.transform=`translateY(${index*sliderHeight}px)`
}