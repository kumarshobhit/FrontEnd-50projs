var sounds=['applause','boo','gasp','tada','victory','wrong'] ;
var buttons=document.querySelector('.buttons')
sounds.forEach(sound=>{
    var ele=document.createElement('button')
    ele.classList.add('btn')
    ele.innerHTML=sound
    ele.addEventListener('click',()=>{
        stopSounds(sounds) ;
        document.querySelector(`#${sound}`).play()
    })
    buttons.appendChild(ele)
})

function stopSounds(sounds){
    sounds.forEach(sound => {
        var sel= document.querySelector(`#${sound}`)
        sel.pause() 
        sel.currentTime=0
    });

}