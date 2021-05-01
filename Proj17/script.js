const popMovieApi='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=50c951bea163d83b9658884a9bdcfa92' ;
const Imgpath='https://image.tmdb.org/t/p/w500' ;
const searchApi=' https://api.themoviedb.org/3/search/movie?api_key=50c951bea163d83b9658884a9bdcfa92&query="" '
var form=document.querySelector('#form-search')
var input=document.querySelector('.search')
var main=document.querySelector('#main')

getMovies(popMovieApi) ;

async function getMovies(url){
const res= await axios.get(url)
if(!res.data) window.location.reload()
showMovies(res.data.results)
}

function showMovies(Movies){
    main.innerHTML=''
Movies.forEach(movie => {
const {poster_path,title,overview,vote_average}=movie ;
const newMovie=document.createElement('div')
newMovie.classList.add('movie')
newMovie.innerHTML=` <img src=${Imgpath+poster_path} alt="">
<div class="movie-info">
    <h3>${title}</h3>
    <span class="${getclassByRate(vote_average)}"> ${vote_average}</span>
</div>
<div class="overview">
    <h3>overview</h3>
    ${overview}
</div>`
main.append(newMovie) ;
    
});
}

form.addEventListener('submit',(e)=>{
    e.preventDefault() ;
    const searchTerm=input.value ;
    getMovies(searchApi+searchTerm)
})

function getclassByRate(vote){
    if(vote>=7) return 'green' ;
    if(vote>=4 ) return 'orange'
    return 'red' ;
}