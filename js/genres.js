window.onload = function () {
var querystringobj=new URLSearchParams(location.search)
var generoElegido = querystringobj.get("idgenre")
var grupo = querystringobj.get("group")
var nombreGenero = querystringobj.get("genrename")
console.log("el genero elegido es: "+ generoElegido)

var h1genero = document.querySelector('.h1genero')
var pelisGenero = document.querySelector('.pelisgenero')

if (grupo == "movies") {

  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)

    .then(function(response) {
    
        return response.json()
      
      })

      .then(function(data) {
        
        console.log(data)
        // la idea seria poner el h1genero.innerHTML += `${...???...} Movies` aca, para que diga que genero estas mirando
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })

    h1genero.innerHTML += `${nombreGenero} Movies`

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${generoElegido}`)

    .then(function(response) {
    
      return response.json()
    
    })
    
    .then(function(data) {
        
        console.log(data)
 
      for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        console.log(element)
          pelisGenero.innerHTML += 
          `
          <article>
          <a href="movies_detail.html?tipo=movie&id=${element.id}"><img src="${imgURL}${element.poster_path}" alt=""></a>
        </article>
          `
      }
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })

  
} else {// para cuando se selecciona un genero en el dropdown de series

  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)

    .then(function(response) {
    
        return response.json()
      
      })

      .then(function(data) {
        
        console.log(data)
        // la idea seria poner el h1genero.innerHTML += `${...???...} Movies` aca, para que diga que genero estas mirando
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })

    h1genero.innerHTML += `${nombreGenero} Seires`

    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${generoElegido}&include_null_first_air_dates=false`)

    .then(function(response) {
    
      return response.json()
    
    })
    
    .then(function(data) {
        
        console.log(data)
 
      for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        console.log(element)
          pelisGenero.innerHTML += 
          `
          <article>
          <a href="movies_detail.html?tipo=tv&id=${element.id}"><img src="${imgURL}${element.poster_path}" alt=""></a>
        </article>
          `
      }
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })



  
}

    
}
