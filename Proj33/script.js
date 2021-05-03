const button=document.querySelector('#add')
const notes=JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(ele=>fun(ele))
}

button.addEventListener('click',()=>{
   fun('')
})

function  fun(text=''){
    console.log(text)
    const note=document.createElement('div')
    note.classList.add('note')
    note.innerHTML=` 
<div class="tools">
 <button class="edit"><i class="fas fa-edit"></i></button>
 <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "":"hidden"}"></div>
<textarea class="${text ?  "hidden":""}"></textarea>`

const main=note.querySelector('.main')
const editBtn=note.querySelector('.edit')
const deleteBtn=note.querySelector('.delete')
const textarea=note.querySelector('textarea')

main.innerHTML=marked(text)

deleteBtn.addEventListener('click',()=>{
    note.remove()
    updateLS()
})
editBtn.addEventListener('click',()=>{
    main.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
}) 

textarea.addEventListener('change',e=>{
const {value}=e.target ;
main.innerHTML=marked(value)
updateLS()
})

document.body.append(note)
}

function updateLS(){
    const notesText=document.querySelectorAll('textarea')
    const notes=[]
    notesText.forEach(note=>notes.push(note.value))
    localStorage.setItem('notes',JSON.stringify(notes))

}