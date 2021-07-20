
import { dataPokemon, filterPokemon, filterType, filterBySort, computeStats} from './data.js';

import data from './data/pokemon/pokemon.js';

/*----------------- Definición de variables------------------------*/
const allData = data.pokemon;
let cardPokemon = document.getElementById("cardFrontPokemon");

const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const btnInfo = document.getElementById("btnInfo");

const containerMain = document.getElementById("container-main");
const containerMainPokedex = document.getElementById("containerMainPokedex");
const containerTop10 = document.getElementById("containerTop10");
let containerFilter = document.getElementById("filterOptions");


const footer = document.getElementById("container-footer");

const seleccionarRegion= document.getElementById("seleccionarRegion");
const seleccionarTipo = document.getElementById("seleccionarTipo");
const seleccionarOrden = document.getElementById("seleccionarOrden");
const cleanFilter = document.getElementById("cleanFilter");

let infoExtra = document.getElementById("infoExtra");
// const pokemontTop10 = document.getElementById("pokemontTop10");

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

const modalContainer = document.getElementById("modal-container");
const closeModal = document.getElementById("close-modal");
const modalPokemon = document.getElementById("modal-pokemon");

/*----------------- Menu desplegable para celular------------------------*/

navToggle.addEventListener("click", () =>  {
navMenu.classList.toggle("nav-menu_visible");
});

// const colorPokemon = () => {
//   const colors = {
//     fire: '#70A83B',
//     grass: '#DEFDE0',
//     electric: '#FCF7DE',
//     water: '#DEF3FD',
//     ground: '#f4e7da',
//     rock: '#d5d5d4',
//     fairy: '#fceaff',
//     poison: '#98d7a5',
//     bug: '#f8d5a3',
//     dragon: '#97b3e6',
//     psychic: '#eaeda1',
//     flying: '#F5F5F5',
//     fighting: '#E6E0D4',
//     normal: '#F5F5F5'
//   };
//   const main_types = Object.keys(colors);
//   let typeColor = colorCard(main_types,allData);
//   const color = colors[typeColor];
//   cardPokemon.style.backgroundColor = color;
//   console.log(color);
// };

/*----------------- Mostrar la data de Pokemon.js------------------------*/
const showPokemon=() =>{
cardPokemon.innerHTML = "";
cardPokemon.innerHTML = allData.map(dataPokemon).join(" ");
};

/*----------------- Mostrar el Modal ------------------------*/
const showModal=() =>{
  const eachCard = document.querySelectorAll(".cardPokemon-front");
  eachCard.forEach(element => element.addEventListener("click",() => {
    modalContainer.classList.add("show")

    const encontrarPokemon = allData.find(elemento => elemento.num === element.id)
    modalPokemon.innerHTML = `
    <div class= "modal-pokemon">
        <h1 class="name-pokemon">${encontrarPokemon.name}</h1>
        <img src="${encontrarPokemon.img}" alt="" class="img-pokemon">
        <p class="about-pokemon">${encontrarPokemon.about}</p>
    </div>
    

    `;

  }));

  closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
  };

/*----------------- Mostrar el Modal Info ------------------------*/
// const showModalInfo=() =>{
//   const eachCard = document.querySelectorAll(".cardPokemonInfo");
//   eachCard.forEach(element => element.addEventListener("click",() => {
//     modalContainer.classList.add("show")

//     const encontrarPokemon = allData.find(elemento => elemento.num === element.id)
//     modalPokemon.innerHTML = `
//     <div class= "modal-pokemon>
//       <div class="containerNameNum">
//         <h1 class="namePokemon">${encontrarPokemon.name}</h1>
//         <h1 class="numPokemon">N°${encontrarPokemon.num}</h1>
//         <img src="${encontrarPokemon.img}" alt="" class="imgPokemon">
//         <p class="aboutPokemon">${encontrarPokemon.about}</p>
//       </div>
//     </div>`;

//   }));

  // closeModal.addEventListener('click', () => {
  //   modalContainer.classList.remove('show');
  // });
  // };





/*----------------- Botones del Header ------------------------*/
btnHome.addEventListener("click",() => {
navMenu.classList.toggle("nav-menu_visible");
containerMainPokedex.style.display="none";
containerTop10.style.display="none";
containerMain.style.display="block";
footer.style.display="none";
});

btnPokedex.addEventListener("click",() => {
  containerMain.style.display="none";
  containerMainPokedex.style.display="block";
  containerTop10.style.display="none";
  containerFilter.classList.add("show");
  // containerFilter.classList.add("show");
  footer.style.display="block";
  navMenu.classList.toggle("nav-menu_visible");

  showPokemon();
  showModal();
  // colorPokemon();
});

/*----------------- Mostrar la función Calculate ------------------------*/
btnInfo.addEventListener("click", () => {

  containerMainPokedex.style.display="block";
  containerMain.style.display="none";
  containerFilter.classList.remove("show");
  containerTop10.style.display="block";
  // containerFilter.classList.remove("show");
  footer.style.display="block";
  navMenu.classList.toggle("nav-menu_visible");

  let rarity = "legendary";
  let top10 = computeStats(rarity,allData);
  let x = top10.length;
  let y = parseInt(((x/251)*100));

  infoExtra.innerHTML=" ";
  infoExtra.innerHTML = "¿Sabías que solo el " + y + "%" + " de los pokemones son legendarios?";

  cardPokemon.innerHTML = " ";
  cardPokemon.innerHTML = top10.map(dataPokemon).join(" ");
  showModal();
});


/*----------------- Function Filter por región y tipo------------------------*/
seleccionarRegion.addEventListener("change", () => {
let regionSeleccionada = seleccionarRegion.value;
let dataFilter = filterPokemon(regionSeleccionada, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
seleccionarOrden.selectedIndex = 0;
seleccionarTipo.selectedIndex = 0;
showModal();
});

seleccionarTipo.addEventListener("click", () => {
let tipoSeleccionado = seleccionarTipo.value;
let dataFilter = filterType(tipoSeleccionado, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
seleccionarRegion.selectedIndex = 0;
seleccionarOrden.selectedIndex = 0;
showModal();
});


/*----------------- Function Sort por nombre ascendente y descendente----------------*/
seleccionarOrden.addEventListener("change", () => {
let ordenSeleccionado = seleccionarOrden.value;
let dataSort = filterBySort(ordenSeleccionado, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataSort.map(dataPokemon).join(" ");
seleccionarTipo.selectedIndex = 0;
seleccionarRegion.selectedIndex = 0;
showModal();
});

/*----------------- Function Limpiar Filtros----------------*/
cleanFilter.addEventListener("click", () => {
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = data.pokemon.map(dataPokemon).join(" ");
seleccionarOrden.selectedIndex = 0;
seleccionarTipo.selectedIndex = 0;
seleccionarRegion.selectedIndex = 0;
});


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
  //  return console.log("puedegirar")