
var btn=document.querySelector('.btn')
var text=document.querySelector('.text')

btn.addEventListener('click', async ()=>{
   try{
        var myInit={
            headers:{
                Accept:'application/json'
            }
        }
        var jokeOb= await axios.get('https://icanhazdadjoke.com/',myInit)
        text.innerHTML=(jokeOb.data.joke)
    }
    catch(e){
        console.log('error is ', e)
    }
})