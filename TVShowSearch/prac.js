const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userInput = form.elements.query.value
    const c = { params: { q: userInput } }
    const api = await axios.get('http://api.tvmaze.com/search/shows', c)
    // const api = await axios.get(`http://api.tvmaze.com/search/shows?q=:${userInput}`)
    console.log(api)
    getImage(api.data)
    form.elements.query.value = ''
})

const getImage = shows => {
    for (let result of shows) {
        if(result.show.image){
            const newImage = document.createElement('IMG')
        newImage.src = result.show.image.medium
        document.body.append(newImage)
        }
        
    }
}

