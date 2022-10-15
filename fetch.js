// const axios = require('axios').default;
// const fetch = require('node-fetch');

// http://www.omdbapi.com/?i=tt3896198&apikey=156c62cf&s=dilan

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=156c62cf&t=")
.then(response => response.json())
.then((response) => console.log(response))

// .catch((err) => console.log(err)

// axios.get(API)
// .then(response => console.log(response.data))
// .catch(err => console.log(err))

const card = '';

const search = document.querySelector(".input-search")

const searchButton = document.querySelector(".btnClick")

searchButton.addEventListener("click", function() {
    
    const inputKeyword = document.querySelector(".input-search")

    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=156c62cf&s=" + inputKeyword.value)
    .then(response => response.json())
    .then((data) => {
        const movies = data.Search
        let cards = ''
        movies.forEach(m => cards += `<div class="card" style="width: 18rem; margin-left : 15px; margin-right: 15px; margin-top : 10px">
        <img class="card-img-top" src=${m.Poster} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <p>${m.Year}</p>
          <p class="card-text">${m.imdbID}</p>
        </div>
      </div>`)
    const movieContainer = document.querySelector(".movie-container")
    movieContainer.innerHTML = cards
    })

    

})


