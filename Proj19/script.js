const toggle=document.querySelector('.toggle') ;
var element=document.body ;
var hourHand=document.querySelector('.hour')
var minHand=document.querySelector('.min')
var secHand=document.querySelector('.sec')
var timeEle=document.querySelector('.time')
var dateEle=document.querySelector('.date')

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['January','February','March','April','May','June','July','August','September','October','November','December']

toggle.addEventListener('click',()=>{
    if(document.body.classList.contains('dark')){
        element.classList.remove('dark')
        toggle.innerText='Light Mode'
    }
    else {
        element.classList.add('dark')
        toggle.innerText='Dark Mode'
    }
})

function setTime(){
    const time=new Date() 
    const day=time.getDay()
    const month=time.getMonth()
    const hours=time.getHours()
    const date=time.getDate()
    const minutes=time.getMinutes()
    const seconds=time.getSeconds()
    const clockHours=hours%12 ;
    const ampm=hours<12?'am':'pm'
    hourHand.style.transform=`translate(-50%, -100%) rotate(${scale(clockHours,0,11,0,360)}deg)` ;
    minHand.style.transform=`translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)` ;
    secHand.style.transform=`translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)` ;
    timeEle.innerText=`${clockHours}:${minutes<10? `0${minutes}`:minutes} ${ampm}`
    dateEle.innerHTML=`${days[day]},${months[month]} <span class="circle">${date}</span>`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime() ;

setInterval(setTime,1000)