window.onload=function(){
var generopelis= document.querySelector("#generopelis")
var generoseries= document.querySelector("#generoseries")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            for (let i = 0; i < data.genres.length; i++) {
                var GENERO = data.genres[i];
                
                generopelis.innerHTML+=
                `<div class="divgenero"><a href="genres.html?group=movies&idgenre=${GENERO.id}&genrename=${GENERO.name}">${GENERO.name}</a></div>
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
                
                generoseries.innerHTML+=
                `<div class="divgenero"><a href="genres.html?group=tv&idgenre=${GENERO.id}&genrename=${GENERO.name}">${GENERO.name}</a></div>
                `
            };
    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })



























}