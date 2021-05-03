const resultEl=document.querySelector('.result')
const clipboardEl=document.querySelector('#clipboard')
const lengthEl=document.querySelector('#Length')
const upperEl=document.querySelector('#Uppercase')
const lowerEl=document.querySelector('#Lowercase')
const numbersEl=document.querySelector('#Numbers')
const symbolsEl=document.querySelector('#Symbols')
const generateEl=document.querySelector('#generate') 
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click',()=>{
    const textarea=document.createElement('textarea')
    if(!resultEl.innerText) return ;
    textarea.value=resultEl.innerText
    document.body.append(textarea )
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('text has been copied to clipboard')
})

generateEl.addEventListener('click',()=>{
    const length=+lengthEl.value
    const hasLower=lowerEl.checked   
    const hasUpper=upperEl.checked   
    const hasNumber=numbersEl.checked   
    const hasSymbol=symbolsEl.checked  
    
    resultEl.innerText=generatePassword(length,hasLower,hasUpper,hasNumber,hasSymbol)
     
})

function generatePassword(l,lower,upper,number,symbol){
    const typesCount=lower+upper+number+symbol
    const types=[{lower},{upper},{number},{symbol}].filter(ele=>Object.values(ele)[0])
    if(typesCount==0) return ''
    let resPassword='' 
    for(let i=0;i<l;i+=typesCount){
        types.forEach(ele=>{
            resPassword+=randomFunc[Object.keys(ele)[0]]()
        })
    }
    return resPassword.slice(0,l)
    
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}