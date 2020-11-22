window.addEventListener('load', function(){
    
    var preferidos = document.querySelector('.preferidos')
    //var favs = localStorage.getItem("favoritos");
    var favs = JSON.parse(localStorage.getItem("favoritos"))



      for (let i = 0; i < favs.length; i++) {
        const element = favs[i];  
        console.log(element)
         

          if (element.tipo == "movie") {

            fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (Object) {
                preferidos.innerHTML += 
                `
                <article>
                <a href="movies_detail.html?tipo=${Object.media_type}&id=${Object.id}"><img src="${imgURL}${Object.poster_path}" alt=""></a>
              </article>
                `
            })
        
            .catch(function (error) {
                console.log(`el error fue ${error}`)
            })
        
            
        } else {
        
            fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (Object) {
                preferidos.innerHTML += 
                `
                <article>
                <a href="movies_detail.html?tipo=${Object.media_type}&id=${Object.id}"><img src="${imgURL}${Object.poster_path}" alt=""></a>
              </article>
                `
            })
        
            .catch(function (error) {
                console.log(`el error fue ${error}`)
            })
        
        }
        
      }
      
    })
