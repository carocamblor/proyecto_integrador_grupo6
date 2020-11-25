window.onload = function () {

  var botonMovies = document.querySelector('#botonMovies')
  var botonSeries = document.querySelector('#botonSeries')
  var generosMovies = document.querySelector('#generosMovies')
  var generosSeries = document.querySelector('#generosSeries')
  
  //var keywords = document.querySelector('#keyMovie').value

  //var arrayGenerosMovies = Array.from(generosMovies.elements)
  //var arrayGenerosSeries = Array.from(generosSeries.elements)

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        for (let i = 0; i < data.genres.length; i++) {
          const element = data.genres[i];
          generosMovies.innerHTML +=`
          <input type="checkbox" name="generosMovies" value="${element.id}"> <label>${element.name}<label>
          `
        }
        generosMovies.innerHTML +=`<p><button type="submit">Search</button></p>`
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        for (let i = 0; i < data.genres.length; i++) {
          const element = data.genres[i];
          generosSeries.innerHTML +=`
          <input type="checkbox" name="generosMovies" value="${element.id}"> <label>${element.name}<label>
          `
        }
        generosSeries.innerHTML +=`<p><button type="submit">Search</button></p>`
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

      botonMovies.addEventListener('click', function(){
        generosMovies.style.display = 'block'
        generosSeries.style.display = 'none'
      })

      botonSeries.addEventListener('click', function(){
        generosSeries.style.display = 'block'
        generosMovies.style.display = 'none'
      })

      var busquedaGenerosMovies = []
      generosMovies.addEventListener('submit', function(event){
        event.preventDefault()
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
      })

}