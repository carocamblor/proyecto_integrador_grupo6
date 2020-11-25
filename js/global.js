window.addEventListener('load', function(){
    
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
                `<li><a href="genres.html?group=movies&idgenre=${GENERO.id}&genrename=${GENERO.name}">${GENERO.name}</a></li>
                `
                console.log(GENERO)
            };
    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })

        fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            for (let i = 0; i < data.genres.length; i++) {
                var GENERO = data.genres[i];
                var menusgenerosseries = document.querySelector("#menugenerosseries")
                menusgenerosseries.innerHTML+=
                `<li><a href="genres.html?group=tv&idgenre=${GENERO.id}&genrename=${GENERO.name}">${GENERO.name}</a></li>
                `
            };
    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })

})
