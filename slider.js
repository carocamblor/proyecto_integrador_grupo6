window.onload = function () {
    var apiKey = "e57721559c7ea59e5e81582798c16c18"
    var imgURL = "https://image.tmdb.org/t/p/w500/"
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
                <div class="uk-panel">
                    <img src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}">
            </li>`;
        };

        

    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })
}