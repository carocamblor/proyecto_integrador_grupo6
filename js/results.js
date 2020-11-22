

window.addEventListener('load', function(){
  let spinnerWrapper = document.querySelector("#spinner")
    spinnerWrapper.style.display = "none";
    var searchResults = document.querySelector('.results')
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var h1results = document.querySelector('#h1results')
    var busqueda = queryStringObj.get('q')

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

})