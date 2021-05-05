
const pokeContainer=document.querySelector('#poke-container')

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

async function createPokedex(){
    for(let i=1;i<=150;i++){
        const pokemon=document.createElement('div') ;
        pokemon.classList.add('pokemon')
        const res= await getPokemon(i)
        const pname=res.name[0].toUpperCase()+res.name.slice(1)
        const pid=res.id.toString().padStart(3,'0') ;
        const typeArray=res.types.map(ele=>ele.type.name) ;
        pokemon.innerHTML=` <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${i}.png" alt="">
    </div>
    <div class="info">
        <span  class="number">#${pid}</span>
        <h3 class="name">${pname}</h3>
        <small class="type">Type: <span>${typeArray[0]}</span></small>
    </div>`
    pokemon.style.backgroundColor=colors[typeArray[0]] ;
        pokeContainer.append(pokemon)
    }
}

createPokedex() ;

async function getPokemon(id){
    const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.data ;
}
