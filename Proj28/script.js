const form=document.querySelector('#form')
const input=document.querySelector('#search')
const main=document.querySelector('.main')
form.addEventListener('submit',e=>{
    e.preventDefault() ;
    const searchId=input.value ;
    callUser(searchId) ;
})
const callUser=async searchTerm =>{
    try{
        const obj= await axios.get(`https://api.github.com/users/${searchTerm}`) ;
        createData(obj) ;
        createRepo(searchTerm)
    }
    catch(e){
        if(e.response.status==404)
        createError('profile not found :(')
    }
}

const createData=obj=>{
    const mainHtml=`<div class="card">
    <div >
        <img class="avatar" src="${obj.data.avatar_url}" alt="">
    </div>
<div class="user-info">
    <h2>${obj.data.name}</h2>
    <p>${obj.data.bio}</p>
    <ul>
        <li>${obj.data.followers}<strong>Followers</strong></li>
        <li>${obj.data.following} <strong>Following</strong></li>
        <li>${obj.data.repos_url.length}<strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
</div>
</div>`

main.innerHTML=mainHtml
}



const createRepo= async searchTerm=>{
    try{
        const repos=  await axios.get(`https://api.github.com/users/${searchTerm}/repos`)
        createRepos(repos.data) ;
    }
    catch(e){
        console.log(e)
        createError('Problem fetching repos')
    }
}

const createRepos=repos=>{
    const reposEl=document.querySelector('#repos')
    repos
    .slice(0,5)
    .forEach(ele => {
        const repoEl=document.createElement('a') ;
        repoEl.classList.add('repo')
        repoEl.href=`${ele.html_url}` ;
        repoEl.innerText=`${ele.name}` ;
        repoEl.target='_blank'
        reposEl.append(repoEl)
    }); 
}

const createError=mess=>{
    const mainHtml=`<div class="card">
    <h1>${mess} :(</h1>
    </div>`

main.innerHTML=mainHtml
}