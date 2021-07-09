import { dataPokemonFront, dataPokemonBack } from './data.js';

import data from './data/pokemon/pokemon.js';

/** Mostrar y ocultar secciones del HTML**/
const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const home = document.getElementById("home");
const containerMainPokedex = document.getElementById("containerMainPokedex");
const footer = document.getElementById("container-footer");
const cardPokemon = document.getElementById("cardsPokemon");
const cardFrontPokemon = document.getElementById("cardFrontPokemon");
const cardBackPokemon = document.getElementById("cardBackPokemon");

//const selectRegion = document.getElementById("listTypeRegion");
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

//Extra la data del pokemon js a una  la parte delantera de la tarjeta Pokemon
document.getElementById("cardFrontPokemon").innerHTML = data.pokemon.map(dataPokemonFront).join(" ");

//Extraer la data del pokemon JS a la parte trasera de la tarjeta Pokemon
document.getElementById("cardBackPokemon").innerHTML = data.pokemon.map(dataPokemonBack).join(" ");



// const btnMoreInfo =document.querySelector('#btnMoreInfo');
// btnMoreInfo.addEventListener("click",() => {
// let cardFront = document.querySelector('#cardPokemonFront');
// cardFront.style.display="none";
// });

// // Filtrar Data por Region
// selectRegion.addEventListener("change", () => {
//     let region = selectDirector.value;
//     if (region == 'kanto') {
//         return console.log("seleccionaste Kanto");
//     } else {
//         return console.log("seleccionaste Johto");
//     }
// });

const mostrarFrente = () => {
	if(cardsPokemon.classList.contains('active')){
		cardsPokemon.classList.remove('active');
	}
}
// const mostrarBack = () => {
//     if(cardPokemon-back.classList.contains('active')){
// 		cardPokemon-back.classList.remove('active');
// 	}
// }

// * Rotacion del cardPokemon
cardsPokemon.addEventListener('click', () => {
    cardsPokemon.classList.toggle('active');
    return console.log("puedegirar");
});

