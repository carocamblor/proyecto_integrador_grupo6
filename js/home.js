window.onload = function () {
    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            var pelicula = data.results[i];

            
            
            var contenedorImagen = document.querySelector('#popular');

            contenedorImagen.innerHTML +=
            `
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <a href="movies_detail.html?idmovie=${pelicula.id}"> <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}"></a>
                    </div>
                <div class="uk-card-body">
                <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas5.png" alt="">
                    </div>
                </div>
            </li>
            `
            puntos = pelicula.vote_average
            console.log(puntos)
           
            switch (puntos) {
                case 5.9:
                    estrellas = 1
                    break;
                case 7:
                    estrellas = 2
                    break;
                case 8:
                    estrellas = 3
                    break;
            
                default:
                    break;
            }
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
                    <a href="movies_detail.html?idmovie=${pelicula.id}"> <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}"></a>
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
                    <a href="movies_detail.html?idmovie=${pelicula.id}"> <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}"></a>
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