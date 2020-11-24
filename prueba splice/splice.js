window.onload = function () {

    var currentTitle = {tipo: "tv", id: "1403"}
    var favs = [
    {tipo: "movie", id: "568332"},
    {tipo: "tv", id: "109958"},
    {tipo: "tv", id: "65988"},
    {tipo: "tv", id: "1403"},
    {tipo: "movie", id: "13"},
    {tipo: "movie", id: "13"},
    {tipo: "skdos", id: "133"}
    ]
    console.log(favs)

    for (let i = 0; i < favs.length; i++) {
        const element = favs[i];
        if ((element.id == currentTitle.id)&&(element.tipo == currentTitle.tipo)){
            console.log(`esta es la que hay que borrar ${element.id} con tipo ${element.tipo}`)
            favs.splice(i,1);
        }
        
    }
    console.log(favs)

}