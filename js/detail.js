window.onload = function () {

var querystringobj=new URLSearchParams(location.search)
var pelielegida= querystringobj.get("idmovie")
console.log("la peli elegida es: "+ pelielegida)
console.log()


fetch(`https://api.themoviedb.org/3/movie/${pelielegida}?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Object) {
        console.log(Object.title);
        var titulojs= document.querySelector("#titulojs")
        titulojs.innerHTML+=
        `  <h1 id="titulomobile" >${Object.title}</h1>
        <div class="contenedor_poster">
           <div> <h1 id="titulotablet" >${Object.title}</h1> 
       
       <img id="stars" src="img/estrellas_home/estrellas5.png" alt="rating">
       <h3>Release date:</h3>
        <p>${Object.release_date}</p>
        <h3>Duration:</h3>
        <p>${Object.runtime} min</p>
       <div id="sinopsistablet"><h3>Synopsis:</h3>
        <p>${Object.overview}</p>
    </div> 
    <iframe src="https://www.youtube.com/embed/YjpsGw7YlU8"> Trailer</iframe>
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
    fetch(`https://api.themoviedb.org/3/movie/${pelielegida}/similar?api_key=${apiKey}&language=en-US&page=1`)
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
            similares.innerHTML+= `<div><a href="movies_detail.html?idmovie=${element.id}"><img src="${imgURL+element.poster_path}" alt=""></a></div>`
        }      

    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })






















}