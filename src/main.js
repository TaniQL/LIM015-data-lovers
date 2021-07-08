import { dataPokemon } from './data.js';

import data from './data/pokemon/pokemon.js';

/** Mostrar y ocultar secciones del HTML**/
const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const home = document.getElementById("home");
const containerMainPokedex = document.getElementById("containerMainPokedex");
const footer = document.getElementById("container-footer");

//const imgPikachu = document.getElementById("imgPikachu");


btnPokedex.addEventListener("click",() => {
home.style.display="none";
containerMainPokedex.style.display="block";
footer.style.display="block";
//imgPikachu.style.visibility = "hidden";
});

btnHome.addEventListener("click",() => {
containerMainPokedex.style.display="none";
home.style.display="block";
footer.style.display="none";
//imgPikachu.style.visibility = "active";
});

//Extra la data del pokemon js
document.getElementById("cardFrontPokemon").innerHTML = data.pokemon.map(dataPokemon).join(" ");
// const btnMoreInfo =document.querySelector('#btnMoreInfo');
// btnMoreInfo.addEventListener("click",() => {
// let cardFront = document.querySelector('#cardPokemonFront');
// cardFront.style.display="none";
// });
