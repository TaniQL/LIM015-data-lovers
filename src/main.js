import { dataPokemon } from './data.js';

import data from './data/pokemon/pokemon.js';

/** Mostrar y ocultar secciones del HTML**/
const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const home = document.getElementById("home");
const pokedex = document.getElementById("pokedex");
const footer = document.getElementById("container-footer");

btnPokedex.addEventListener("click",() => {
home.style.display="none";
pokedex.style.display="block";
footer.style.display="block"

});

btnHome.addEventListener("click",() => {
pokedex.style.display="none";
home.style.display="block";
footer.style.display="none";
});

//Extra la data del pokemon js
document.getElementById("pokedex").innerHTML = data.pokemon.map(dataPokemon).join(" ");
// const btnMoreInfo =document.querySelector('#btnMoreInfo');
// btnMoreInfo.addEventListener("click",() => {
// let cardFront = document.querySelector('#cardPokemonFront');
// cardFront.style.display="none";
// });
