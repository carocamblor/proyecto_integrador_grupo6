

window.addEventListener('load', function(){
  let spinnerWrapper = document.querySelector("#spinner")
    spinnerWrapper.style.display = "none";
    var searchResults = document.querySelector('.results')
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var h1results = document.querySelector('#h1results')
    var busqueda = queryStringObj.get('q')
    var filteredSearchSeries = queryStringObj.getAll('generosSeries')
    var filteredSearchMovies = queryStringObj.getAll('generosMovies')
    console.log(filteredSearchMovies)
    console.log(filteredSearchSeries)

    if (filteredSearchMovies.length > 0 ) {
      console.log('hacer busqeda Movies')

      var generosMovies = filteredSearchMovies.toString()

      h1results.innerHTML += `Showing results for your filtered search.`

      //FETCH MOVIES
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${generosMovies}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        if (data.results.length === 0) {
          alert('No titles match your search.')
        } else {         
        
        for (let i = 0; i < data.results.length; i++) {
          const element = data.results[i];
          searchResults.innerHTML +=`
          <article>
              <a href="movies_detail.html?tipo=movie&id=${element.id}"><img src="${imgURL}${element.poster_path}" alt="${element.title}"></a>
            </article>
          `
        }
      }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
      
    }else if (filteredSearchSeries.length > 0) {

      console.log('hacer busqueda SERIES')

    } else {
      
    

    h1results.innerHTML += `Showing results for "${busqueda}"`

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&query=${busqueda}&page=1&include_adult=false`)

    .then(function(response) {
    
      return response.json()
    
    })
    
    .then(function(data) { 
      if (data.results.length === 0) {

        console.log('no hay resultados')
        
      }
      for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        console.log(element)
          searchResults.innerHTML += 
          `
          <article>
          <a href="movies_detail.html?tipo=${element.media_type}&id=${element.id}"><img src="${imgURL}${element.poster_path}" alt=""></a>
        </article>
          `
      }
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })
  }

})