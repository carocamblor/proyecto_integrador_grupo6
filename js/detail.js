window.onload = function () {

var querystringobj=new URLSearchParams(location.search)
var idElegido= querystringobj.get("id")
var tipo = querystringobj.get("tipo")
console.log("la peli elegida es: "+ idElegido)

  // var favoritos = ['a','b','c']
  
 


   //var favoritos = []
   

var addFavorite = document.querySelector('#addFavorite')
    addFavorite.addEventListener("click", function () {
        
        alert('apretaste el boton de favoritos')
        favoritos.push('rojo')
        localStorage.getItem("favoritos")
        //var arrayFavs = JSON.parse(localStorage.getItem("favoritos"))
        if (arrayFavs == null) {
            var arrayFavs = JSON.parse(localStorage.getItem("favoritos"))
            favoritos.push('')
        } else {
            
        }

        //1) get del array
        //2) getitem ---> parse
        //3)agregas
        //4) guardas de nuevo en session el array modificado
        
    })

if (tipo == "movie") {

    fetch(`https://api.themoviedb.org/3/movie/${idElegido}?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Object) {
        puntos = Object.vote_average
        console.log(puntos)
        var estrellas
        switch (true) {
            case (puntos <= 2):
                estrellas = 1
                break;
            case (puntos <= 4):
                estrellas = 2
                break;
            case (puntos <= 6):
                estrellas = 3
                break;
            case (puntos <= 8):
                estrellas = 4
                break;
            case (puntos <= 10):
                estrellas = 5
                break;
            case (puntos == 0):
                estrellas = 0
                break;
    }

        var titulojs= document.querySelector("#titulojs")
        titulojs.innerHTML+=
        `  <h1 id="titulomobile" >${Object.title}</h1>
        <div class="contenedor_poster">
           <div> <h1 id="titulotablet" >${Object.title}</h1> 
       
       <img id="stars" src="img/estrellas_home/estrellas${estrellas}.png" alt="rating">
       <h3>Release date:</h3>
        <p>${Object.release_date}</p>
        <h3>Duration:</h3>
        <p>${Object.runtime} min</p>
       <div id="sinopsistablet"><h3>Synopsis:</h3>
        <p>${Object.overview}</p>
    </div> 
    <div class="episodio_desktop"> 
                <h3>Review</h3>
                <p>review</p>
                </div>
       </div>
    <img class="poster" src="${imgURL+Object.poster_path}" alt="${Object.title}">
    </div >
       <div id="sinopsismobile">
        <h3>Synopsis:</h3>
        <p>After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.</p>
        </div>
        `
        
       

    })

    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })
    fetch(`https://api.themoviedb.org/3/movie/${idElegido}/similar?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Object) {
        console.log(Object);
        if (Object.results.length === 0) {
            console.log('no hay similares')
        }
        var similares= document.querySelector("#similares")
        for (let i = 0; i < Object.results.length; i++) {
            const element = Object.results[i];
            similares.innerHTML+= `<div><a href="movies_detail.html?tipo=movie&id=${element.id}"><img src="${imgURL+element.poster_path}" alt=""></a></div>`
        }      

    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })

    
} else {

    fetch(`https://api.themoviedb.org/3/tv/${idElegido}?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Object) {
        console.log(Object.title);
        var review = "fetch"
        var titulojs= document.querySelector("#titulojs")
        titulojs.innerHTML+=
        `  <h1 id="titulomobile" >${Object.title}</h1>
        <div class="contenedor_poster">
           <div> <h1 id="titulotablet" >${Object.title}</h1> 
       
       <img id="stars" src="img/estrellas_home/estrellas5.png" alt="rating">
       <h3>First aired:</h3>
        <p>${Object.first_air_date}</p>
        <h3>Numer of episodes:</h3>
        <p>${Object.number_of_episodes} espisodes</p>
       <div id="sinopsistablet"><h3>Synopsis:</h3>
        <p>${Object.overview}</p>
    </div> 
    <div class="episodio_desktop"> 
                <h3>Review</h3>
                <p>review</p>
            </div>
       </div>
    <img class="poster" src="${imgURL+Object.poster_path}" alt="Birds Of Prey">
    </div >
       <div id="sinopsismobile">
        <h3>Synopsis:</h3>
        <p>After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.</p>
        </div>
        `
    }) 
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })
    fetch(`https://api.themoviedb.org/3/tv/${idElegido}/similar?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Object) {
        console.log(Object);
        if (Object.results.length === 0) {
            console.log('no hay similares')
        }
        var similares= document.querySelector("#similares")
        for (let i = 0; i < Object.results.length; i++) {
            const element = Object.results[i];
            similares.innerHTML+= `<div><a href="movies_detail.html?tipo=tv&id=${element.id}"><img src="${imgURL+element.poster_path}" alt=""></a></div>`
        }      

    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })


    
    
}























}