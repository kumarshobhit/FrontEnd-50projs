var key=document.querySelector('#key')
var which=document.querySelector('#which')
var code=document.querySelector('#code')
var press=document.querySelector('#press')
console.log(press) ;

window.addEventListener('keydown',event=>{
    // key.innerText=e.key ;
    // var small=document.createElement('small')
    // code.innerText=e.code ;
    // which.innerText=e.keyCode||e.which ;
    // press.style.display='none' ;
    document.body.innerHTML=  `<div class="container">
    <div class="content" id="key"> ${event.key}
    <small>event.key</small>
</div>
<div class="content" id="which">${event.which}
    <small>event.which</small>
</div>
<div class="content" id="code">${event.code}
    <small>event.key</small>
</div>
</div>`
})