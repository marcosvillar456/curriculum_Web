const base_url = "https://api.jikan.moe/v3";/*Esta es la url base de la api*/

function BuscarAnime(event){/*aca se busca el anime */

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");
    /*fetch:permite manipular partes del canal http tales como peticiones y respuestas*/
    fetch(`${base_url}/search/anime?q=${query}&page=1`)/*aca se le agrega a la url base el anime que quiero buscar*/
    .then(res=>res.json())
    .then(SubirAlDom)
    .catch(err=>console.warn(err.message));

}

function SubirAlDom(data){

    const BuscarResultados = document.getElementById('Buscar_Resultados');
   
        const animeByCategories = data.results
        .reduce((acc, anime)=>{
            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        },{})
        BuscarResultados.innerHTML = Object.keys(animeByCategories).map(key=>{
            
            const animesHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `
                    <div class="card">
                        <div class="card-image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${anime.title}</span>
                            <p>${anime.synopsis}</p>
                        </div>
                        <div class="card-action">
                            <a href="${anime.url}">Mas informacion</a>
                        </div>
                    </div>
                `
            })
            return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="kemicofa-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}

function CargarPagina(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", BuscarAnime);
    console.log( BuscarAnime   )
}


window.addEventListener("load", CargarPagina);