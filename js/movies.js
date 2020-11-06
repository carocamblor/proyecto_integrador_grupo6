window.onload = function () {
    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            var pelicula = data.results[i];

            console.log("holaa " + pelicula.original_title + " " + imgURL + pelicula.poster_path)
            
            var contenedorImagen = document.querySelector('#popular');

            contenedorImagen.innerHTML +=
            `<li>
            <a href="movies_detail.html"> 
                <div class="uk-panel">
                    <img src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}">
            </a>
            </li>`;
        };

        

    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })
}