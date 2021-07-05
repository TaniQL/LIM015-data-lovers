import { dataPokemon } from './data.js';

import data from './data/pokemon/pokemon.js';

/** Mostrar y ocultar secciones del HTML**/

btnPokedex.addEventListener("click",() => {
let home = document.getElementById("home");
const btnPokedex = document.getElementById("btnPokedex");
home.style.display="none";

});


document.getElementById("pokedex").innerHTML = data.pokemon.map(dataPokemon).join(" ");