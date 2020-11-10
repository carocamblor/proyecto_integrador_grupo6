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
            `
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}">
                    </div>
                <div class="uk-card-body">
                <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas5.png" alt="">
                    </div>
                </div>
            </li>
            `
        };

    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            var pelicula = data.results[i];

            var contenedorImagen = document.querySelector('#top');

            contenedorImagen.innerHTML +=
            `
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}">
                    </div>
                <div class="uk-card-body">
                 <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas5.png" alt="">
                    </div>
                </div>
            </li>
            `
        };
        
    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            var pelicula = data.results[i];

            var contenedorImagen = document.querySelector('#upcoming');

            contenedorImagen.innerHTML +=
            `
            <li>
            
                <div class="uk-card uk-card-default">
                    
                    <div class="uk-card-media-top">
                        <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}">
                    </div>

                <div class="uk-card-body">
                <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas5.png" alt="">
                    </div>
                </div>
            
            </li>
            `
        };
        
    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })
}