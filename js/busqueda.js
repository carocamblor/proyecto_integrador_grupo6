window.onload = function () {

  var resultados = document.querySelector('#results')

  var botonMovies = document.querySelector('#botonMovies')
  var botonSeries = document.querySelector('#botonSeries')
  var generosMovies = document.querySelector('#generosMovies')
  var generosSeries = document.querySelector('#generosSeries')
  var h4Movie = document.querySelector('#h4Movie')
  var h4Serie = document.querySelector('#h4Serie')
  var divGenerosMovies = document.querySelector('#divGenerosMovies')
  var divGenerosSeries = document.querySelector('#divGenerosSeries')
  var keywords = document.querySelector('#keywords')
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
          <span><input class="inputCheckboxGeneros" type="checkbox" name="generosMovies" value="${element.id}"> <label>${element.name}</label></span>
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
          <span><input class="inputCheckboxGeneros" type="checkbox" name="generosSeries" value="${element.id}"><label>${element.name}</label></span>
          `
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
      //  event.preventDefault()
        var busquedaGenerosMovies = []
        busquedaGenerosMovies.length = 0
        resultados.innerHTML = ''
        var arrayGenerosMovies = Array.from(generosMovies.elements)
        console.log(arrayGenerosMovies)
        for (let i = 0; i < arrayGenerosMovies.length; i++) {
          const element = arrayGenerosMovies[i];
            if (element.checked == true) {
              busquedaGenerosMovies.push(element.value)
            }
        }
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
            alert('No titles match your search.')
          } else {         
          yourResults.style.display = 'block'
          for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            resultados.innerHTML +=`
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

      })
      //CUANDO SUMBIT EL FORM DE SERIES
      generosSeries.addEventListener('submit', function(event){
        event.preventDefault()
        var busquedaGenerosSeries = []
        busquedaGenerosSeries.length = 0
        resultados.innerHTML = ''
        var searchKeywords = keywords.value
        var arrayGenerosSeries = Array.from(generosSeries.elements)
        console.log(arrayGenerosSeries)
        for (let i = 0; i < arrayGenerosSeries.length; i++) {
          const element = arrayGenerosSeries[i];
            if (element.checked == true) {
              busquedaGenerosSeries.push(element.value)
            }
        }
        console.log(busquedaGenerosSeries)
        var generosParaBuscarSeries = busquedaGenerosSeries.toString()
        console.log(generosParaBuscarSeries)

        //FETCH SERIES
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${generosParaBuscarSeries}&include_null_first_air_dates=false&with_keywords=${searchKeywords}`)
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          yourResults.style.display = 'block'
          for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            resultados.innerHTML +=`
            <article>
                <a href="movies_detail.html?tipo=tv&id=${element.id}"><img src="${imgURL}${element.poster_path}" alt="${element.title}"></a>
              </article>
            `
          }
        })
        .catch(function(error) {
          console.log("Error: " + error);
        })

      })

}