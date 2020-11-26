

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

    var botonAdvSearch = document.querySelector('#AdvSearch')
    var divAdvSearch = document.querySelector('#buscadorAvanzado')
    botonAdvSearch.addEventListener('click', function () {
      if (window.getComputedStyle(divAdvSearch).display === "none") {
        divAdvSearch.style.display = 'block'
        h1results.innerHTML = `Wolf Advanced Search.`
      }else{
        divAdvSearch.style.display = 'none'
        h1results.innerHTML = `At Wolf you can search for any movie or series.`
        searchResults.style.display='none'
      }

      
    })
    //PARA LA BUSQUEDA AVANZADA

  var botonMovies = document.querySelector('#botonMovies')
  var botonSeries = document.querySelector('#botonSeries')
  var generosMovies = document.querySelector('#generosMovies')
  var generosSeries = document.querySelector('#generosSeries')
  var h4Movie = document.querySelector('#h4Movie')
  var h4Serie = document.querySelector('#h4Serie')
  var divGenerosMovies = document.querySelector('#divGenerosMovies')
  var divGenerosSeries = document.querySelector('#divGenerosSeries')
  var keywordsMovies = document.querySelector('#keywordsMovies')
  var keywordsSeries = document.querySelector('#keywordsSeries')
  var yourResults = document.querySelector('#yourResults')

    //FETCH ARRAY GENEROS MOVIES
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        for (let i = 0; i < data.genres.length; i++) {
          const element = data.genres[i];
          divGenerosMovies.innerHTML +=`
          <span>
          <label class="container"><span>${element.name}</span>
          <input class="inputCheckboxGeneros" type="checkbox" name="generosMovies" value="${element.id}">
          <span class="checkmark"></span>
          </label>
          </span>
          `
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
    //FETCH ARRAY GENEROS SERIES
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        for (let i = 0; i < data.genres.length; i++) {
          const element = data.genres[i];
          divGenerosSeries.innerHTML +=`
          <span>
          <label class="container"><span>${element.name}</span>
          <input class="inputCheckboxGeneros" type="checkbox" name="generosMovies" value="${element.id}">
          <span class="checkmark"></span>
          </label>
          </span>`
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

      //BOTON MOVIES
      botonMovies.addEventListener('click', function(){
        generosMovies.style.display = 'block'
        generosSeries.style.display = 'none'
        h4Movie.style.display = 'block'
        h4Serie.style.display = 'none'
      })
      //BOTON SERIES
      botonSeries.addEventListener('click', function(){
        generosSeries.style.display = 'block'
        generosMovies.style.display = 'none'
        h4Serie.style.display = 'block'
        h4Movie.style.display = 'none'
        
      })
      //CUANDO SUMBIT EL FORM DE MOVIES
      generosMovies.addEventListener('submit', function(event){
        event.preventDefault()
        var busquedaGenerosMovies = []
        busquedaGenerosMovies.length = 0
        searchResults.innerHTML = ''
        yourResults.style.display ='none'
        var arrayGenerosMovies = Array.from(generosMovies.elements)
        console.log(arrayGenerosMovies)
        for (let i = 0; i < arrayGenerosMovies.length; i++) {
          const element = arrayGenerosMovies[i];
            if (element.checked == true) {
              busquedaGenerosMovies.push(element.value)
            }
        }
        if(busquedaGenerosMovies.length === 0){
          yourResults.style.display = 'block'
            searchResults.style.display='none'
            yourResults.innerHTML = `Please select at least one genre.`
        }else{
        console.log(busquedaGenerosMovies)
        var generosParaBuscarMovies = busquedaGenerosMovies.toString()
        console.log(generosParaBuscarMovies)

        //FETCH MOVIES
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${generosParaBuscarMovies}`)
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          if (data.results.length === 0) {
            yourResults.style.display = 'block'
            searchResults.style.display='none'
            yourResults.innerHTML = `No titles match your search.`
          } else {      
            yourResults.style.display ='block'   
            searchResults.style.display='grid'
            yourResults.innerHTML = `Showing results for your filtered search.`
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
      }

      })

      //CUANDO SUMBIT EL FORM DE SERIES
      generosSeries.addEventListener('submit', function(event){
        event.preventDefault()
        var busquedaGenerosSeries = []
        busquedaGenerosSeries.length = 0
        searchResults.innerHTML = ''
        var searchKeywordsSeries = keywordsSeries.value
        var arrayGenerosSeries = Array.from(generosSeries.elements)
        console.log(arrayGenerosSeries)
        for (let i = 0; i < arrayGenerosSeries.length; i++) {
          const element = arrayGenerosSeries[i];
            if (element.checked == true) {
              busquedaGenerosSeries.push(element.value)
            }
        }
        if(busquedaGenerosSeries.length === 0){
          alert('please select at least one genre')
        }else{
        console.log(busquedaGenerosSeries)
        var generosParaBuscarSeries = busquedaGenerosSeries.toString()
        console.log(generosParaBuscarSeries)

        //FETCH SERIES
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${generosParaBuscarSeries}&include_null_first_air_dates=false&with_keywords=${searchKeywordsSeries}`)
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          yourResults.style.display = 'block'
          for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            searchResults.innerHTML +=`
            <article>
                <a href="movies_detail.html?tipo=tv&id=${element.id}"><img src="${imgURL}${element.poster_path}" alt="${element.title}"></a>
              </article>
            `
          }
        })
        .catch(function(error) {
          console.log("Error: " + error);
        })
      }

      })
    


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