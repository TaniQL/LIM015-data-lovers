import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const btnPokedex = document.getElementById("pokedex");
let home = document.getElementById("home");

btnPokedex.addEventListener("click",() => {
home.style.display="none";

});


document.getElementById("pokemones").innerHTML = data.pokemon.map(example).join(" ");