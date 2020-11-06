window.onload = function () {
        var genres =  [
          {
            "idHTML": "action",
            "id": 10759,
            "name": "Action & Adventure"
          },
          {
            "idHTML": "animation",
            "id": 16,
            "name": "Animation"
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
            "idHTML": "documentary",
            "id": 99,
            "name": "Documentary"
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
            "idHTML": "kids",
            "id": 10762,
            "name": "Kids"
          },
          {
            "idHTML": "mystery",
            "id": 9648,
            "name": "Mystery"
          },
          {
            "idHTML": "news",
            "id": 10763,
            "name": "News"
          },
          {
            "idHTML": "reality",
            "id": 10764,
            "name": "Reality"
          },
          {
            "idHTML": "science",
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
          },
          {
            "idHTML": "soap",
            "id": 10766,
            "name": "Soap"
          },
          {
            "idHTML": "talk",
            "id": 10767,
            "name": "Talk"
          },
          {
            "idHTML": "war",
            "id": 10768,
            "name": "War & Politics"
          },
          {
            "idHTML": "western",
            "id": 37,
            "name": "Western"
          }
        ]
    

    for (let i = 0; i < genres.length; i++) {
        const element = genres[i];
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${element.id}&include_null_first_air_dates=false`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            for (let i = 0; i < data.results.length; i++) {
                var serie = data.results[i];
                
                var contenedorImagen = document.querySelector(`#${element.idHTML}`);
    
                contenedorImagen.innerHTML +=
                `
                <li>
                    <a href="series_detail.html"> 
                        <div class="uk-panel">
                            <img src="${imgURL + serie.poster_path}" alt="${serie.name}">
                    </a>
                </li>`
            };
    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })
    }
    
}