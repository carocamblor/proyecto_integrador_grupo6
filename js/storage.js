window.onload = function(){

    var favoritos = []
    localStorage.setItem("favoritos",JSON.stringify(favoritos))
    var arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"))

    var addFavorite = document.querySelector('#addFavorite')
    
    addFavorite.addEventListener("click", function (event) {

        console.log('apretaste el boton de favoritos')
        favoritos.push()
    }) 

}