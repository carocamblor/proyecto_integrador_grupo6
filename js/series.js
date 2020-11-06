window.onload = function () {
        var genres =  [
          {
            "idHTML": "action",
            "id": 28,
            "name": "Action"
          },
          {
            "idHTML": "adventure",
            "id": 12,
            "name": "Adventure"
          },
          {
            "idHTML": "comedy",
            "id": 35,
            "name": "Comedy"
          },
          {
            "idHTML": "crime",
            "id": 80,
            "name": "Crime"
          },
          {
            "idHTML": "drama",
            "id": 18,
            "name": "Drama"
          },
          {
            "idHTML": "family",
            "id": 10751,
            "name": "Family"
          },
          {
            "idHTML": "fantasy",
            "id": 14,
            "name": "Fantasy"
          },
          {
            "idHTML": "horror",
            "id": 27,
            "name": "Horror"
          },
          {
            "idHTML": "music",
            "id": 10402,
            "name": "Music"
          },
          {
            "idHTML": "mystery",
            "id": 9648,
            "name": "Mystery"
          },
          {
            "idHTML": "romance",
            "id": 10749,
            "name": "Romance"
          },
          {
            "idHTML": "science",
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "idHTML": "thriller",
            "id": 53,
            "name": "Thriller"
          },
          {
            "idHTML": "western",
            "id": 37,
            "name": "Western"
          }
        ]
    

    for (let i = 0; i < genres.length; i++) {
        const element = genres[i];
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${element.id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            for (let i = 0; i < data.results.length; i++) {
                var pelicula = data.results[i];
                
                var contenedorImagen = document.querySelector(`#${element.idHTML}`);
    
                contenedorImagen.innerHTML +=
                `
                <li>
                    <a href="movies_detail.html"> 
                        <div class="uk-panel">
                            <img src="${imgURL + pelicula.poster_path}" alt="${pelicula.title}">
                    </a>
                </li>`
            };
    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })
    }
    
}