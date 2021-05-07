const filter=document.querySelector('#filter')
const list=document.querySelector('#result')
const listItems=[] 


const getData=async()=> {
    list.innerHTML=''
    const res= await axios.get('https://randomuser.me/api?results=20')
    const data=res.data.results ;
    console.log(data)
    data.forEach(ele => {
             const item=document.createElement('li')
        item.innerHTML=`
        <img src="${ele.picture.thumbnail}" alt="Sara">
               <div class="user-info">
                   <h4>${ele.name.first} ${ele.name.last}</h4>
                   <p>${ele.location.state}, ${ele.location.country}</p>
               </div>   `
        listItems.push(item) 
        list.append(item) 
    });
}

getData() ;

const searchTerm=query=>{
listItems.forEach(ele=>{
    if(ele.innerText.toLowerCase().includes(query.toLowerCase())){
        ele.classList.remove('hide')
    }
    else {
        ele.classList.add('hide')
    }
})
}

filter.addEventListener('input',e=>searchTerm(e.target.value))
