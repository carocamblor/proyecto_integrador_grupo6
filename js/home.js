window.onload = function () {

    function rating(puntos) {
        if (puntos <= 2){
            return 1
        } else if (puntos <=4) {
            return 2
        }  else if (puntos <= 6) {
            return 3
        }  else if (puntos <= 8) {
            return 4
        } else if (puntos <= 10) {
            return 5
        } else {
           // poner alert de error
        }
        
    }

    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var user = queryStringObj.get("User")
    localStorage.setItem("username", user)



   


    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            var pelicula = data.results[i];

            var estrellas = rating(pelicula.vote_average);
            
            var contenedorImagen = document.querySelector('#popular');

            contenedorImagen.innerHTML +=
            `
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <a href="movies_detail.html?tipo=movie&id=${pelicula.id}"> <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}"></a>
                    </div>
                <div class="uk-card-body">
                <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas${estrellas}.png" alt="">
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
            
            var estrellas = rating(pelicula.vote_average);

            var contenedorImagen = document.querySelector('#top');

            contenedorImagen.innerHTML +=
            `
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <a href="movies_detail.html?tipo=movie&id=${pelicula.id}"> <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}"></a>
                    </div>
                <div class="uk-card-body">
                 <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas${estrellas}.png" alt="">
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

            var estrellas = rating(pelicula.vote_average);

            var contenedorImagen = document.querySelector('#upcoming');

            contenedorImagen.innerHTML +=
            `
            <li>
            
                <div class="uk-card uk-card-default">
                    
                    <div class="uk-card-media-top">
                    <a href="movies_detail.html?tipo=movie&id=${pelicula.id}"> <img class="poster" src="${imgURL + pelicula.poster_path}" alt="${pelicula.original_title}"></a>
                    </div>

                <div class="uk-card-body">
                <h3 class="uk-text-truncate">${pelicula.original_title} </h3>
                        <img class="estrellas" src="img/estrellas_home/estrellas${estrellas}.png" alt="">
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