
import { dataPokemon, filterPokemon, filterType, filterBySort, computeStats} from './data.js';

import data from './data/pokemon/pokemon.js';

/*----------------- Mostrar y ocultar secciones del HTML------------------------*/
const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const btnTop10 = document.getElementById("btnTop10");
const containerHome = document.getElementById("containerHome");
const containerMainPokedex = document.getElementById("containerMainPokedex");
const containerTop10 = document.getElementById("containerTop10")
const footer = document.getElementById("container-footer");
const allData = data.pokemon;
const seleccionarRegion= document.getElementById("seleccionarRegion");
let cardPokemon = document.getElementById("cardFrontPokemon");
const seleccionarTipo = document.getElementById("seleccionarTipo");
const seleccionarOrden = document.getElementById("seleccionarOrden");
const cleanFilter = document.getElementById("cleanFilter");

/*----------------- Mostrar la data de Pokemon.js------------------------*/
const showPokemon  =() =>{
cardPokemon.innerHTML = "";
cardPokemon.innerHTML = allData.map(dataPokemon).join(" ");
}

/*----------------- Botones del Header ------------------------*/
btnHome.addEventListener("click",() => {
containerMainPokedex.style.display="none";
containerTop10.style.display="none";
containerHome.style.display="block";
footer.style.display="none";
});

btnPokedex.addEventListener("click",() => {
containerHome.style.display="none";
containerMainPokedex.style.display="block";
containerTop10.style.display="none";
footer.style.display="block";
showPokemon();
});

btnTop10.addEventListener("click", () => {
containerMainPokedex.style.display="none";
containerHome.style.display="none";
containerTop10.style.display="block";
footer.style.display="none";
});

/*----------------- Function Filter por región y tipo------------------------*/
seleccionarRegion.addEventListener("change", () => {
let regionSeleccionada = seleccionarRegion.value;
let dataFilter = filterPokemon(regionSeleccionada, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
})

seleccionarTipo.addEventListener("click", () => {
let tipoSeleccionado = seleccionarTipo.value;
let dataFilter = filterType(tipoSeleccionado, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
seleccionarRegion.selectedIndex = 0;
seleccionarOrden.selectedIndex = 0;
})


/*----------------- Function Sort por nombre ascendente y descendente----------------*/
seleccionarOrden.addEventListener("change", () => {
let ordenSeleccionado = seleccionarOrden.value;
let dataSort = filterBySort(ordenSeleccionado, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataSort.map(dataPokemon).join(" ");
seleccionarTipo.selectedIndex = 0;
seleccionarRegion.selectedIndex = 0;
})

/*----------------- Function Limpiar Filtros----------------*/
cleanFilter.addEventListener("click", () => {
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = data.pokemon.map(dataPokemon).join(" ");
seleccionarOrden.selectedIndex = 0;
seleccionarTipo.selectedIndex = 0;
seleccionarRegion.selectedIndex = 0;
});

/*----------------- Function calcular----------------*/
computeStats.addEventListener()

//const mostrarFrente = () => {
//	if(cardsPokemon.classList.contains('active')){
	//	cardsPokemon.classList.remove('active');
	//}
//}
// const mostrarBack = () => {
//     if(cardPokemon-back.classList.contains('active')){
// 		cardPokemon-back.classList.remove('active');
// 	}
// }

// * Rotacion del cardPokemon
//cardsPokemon.addEventListener('click', () => {
  //  cardsPokemon.classList.toggle('active');
  //  return console.log("puedegirar");