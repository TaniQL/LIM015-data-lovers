/* eslint-disable no-prototype-builtins */
// estas funciones son de ejemplo

/*Cara Delantera de la tarjeta*/

export const dataPokemonFront = (elemento) => {

  return `<div class="cardPokemon-front" id="cardPokemonFront">
  <h1 class="namePokemon">${elemento.name}</h1>
  <h1 class="numPokemon">N°${elemento.num}</h1><br></br>
  <img src="${elemento.img}" alt="" class="imgPokemon">
  <h1 class="typePokemon">${elemento.type}</h1>
  </div>`
};

/*Cara Delantera de la tarjeta*/


export const dataPokemonBack = (elemento) => {

  let evolution = '';
  let nextEvolution = '';
  let prevEvolution = '';
  let prevPrevEvolution = '';

  if (elemento.evolution.hasOwnProperty("next-evolution")){
    evolution = elemento.evolution["next-evolution"][0].name;

    if(elemento.evolution["next-evolution"][0].hasOwnProperty("next-evolution")){
    nextEvolution = elemento.evolution["next-evolution"][0]["next-evolution"][0].name;
    } else if (elemento.evolution.hasOwnProperty("prev-evolution")){
      prevEvolution = elemento.evolution["prev-evolution"][0].name;
    }
  } else if (elemento.evolution.hasOwnProperty("prev-evolution")){
    prevEvolution = elemento.evolution["prev-evolution"][0].name;
    if(elemento.evolution["prev-evolution"][0].hasOwnProperty("prev-evolution")){
    prevPrevEvolution = elemento.evolution["prev-evolution"][0]["prev-evolution"][0].name;
    }
  }

  return `<div class="cardPokemon-back" id="cardPokemonBack">
  <h1 class="region">Region:${elemento.generation.name}</h1>
  <h1 class="resistant">Resistant:${elemento.resistant}</h1>
  <h1 class="weakness">Weakness:${elemento.weaknesses}</h1><br></br>
  <h2>Evolutions</h2>
  <h1 class="evolution">${evolution}</h1>
  <h1 class="next-evolution">${nextEvolution}</h1>
  <h1 class="prev-evolution">${prevEvolution}</h1>
  <h1 class="prev-evolution">${prevPrevEvolution}</h1>
  </div>`
};

//<input class="moreInfo" type="button" id="btnMoreInfo" value="More Info">


// // Función filter.../
//   export const filterByRegion = (elemento) => {
//     let dataFilter = elemento.filter(elemento => elemento.generation.name ==='kanto');
//     return dataFilter
//   };

    // if(elemento.generation.name ==='kanto'){
    // return console.log(elemento.filter(predicado));
    // } else if(elemento.generation.name ==='johto'){
    // return console.log("Región Johto");
    // }
