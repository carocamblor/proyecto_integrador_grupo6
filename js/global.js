
    
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            for (let i = 0; i < data.genres.length; i++) {
                var GENERO = data.genres[i];
                var menusgenerospelis = document.querySelector("#menugenerospelis")
                menusgenerospelis.innerHTML+=
                `<li><a href="genres.html?idgenre=${GENERO.id}">${GENERO.name}</a></li>
                `
                console.log(GENERO)
            };
    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })
        
 