window.onload = function () {
    var apiKey = "e57721559c7ea59e5e81582798c16c18"
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const actor = data[i];

            console.log("holaa" + backdrop_path)
            
            var contenidoQueMostrar =+
            `<div class="uk-panel">
                    <img src="${backdrop_path}" alt="${data}">`;
        };

        var contenedorImagen = document.querySelector('div ul li')
        contenedorImagen.innerHTML = contenidoQueMostrar;
    })
    .catch(function (error) {
        console.log(`el error fue ${error}`)
    })
}