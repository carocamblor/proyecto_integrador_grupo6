window.onload = function () {
var querystringobj=new URLSearchParams(location.search)
var pelielegida= querystringobj.get("genre")
console.log("la peli elegida es: "+ pelielegida)
console.log()
}