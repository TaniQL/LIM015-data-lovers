/* eslint-disable no-prototype-builtins */
// estas funciones son de ejemplo

/*Cara Delantera de la tarjeta*/

export const dataPokemon = (elemento) => {

  return `<div class="cardPokemon-front" id="cardPokemonFront">
  <h1 class="namePokemon">${elemento.name}</h1>
  <h1 class="numPokemon">N°${elemento.num}</h1><br></br>
  <img src="${elemento.img}" alt="" class="imgPokemon">
  <h1 class="typePokemon">${elemento.type}</h1>
  </div>`
};

/* ---------------Function Filter Region --------------------*/

export const filterPokemon = (regionSeleccionada, allData) => {
let dataFilterRegion = allData.filter(reg=>reg.generation.name == regionSeleccionada)
return dataFilterRegion;
};

/* ---------------Function Filter Type --------------------*/

export const filterType = (tipoSeleccionado, allData) => {
let dataFilterType = allData.filter(tipo=> tipo.type.includes(tipoSeleccionado));
return dataFilterType;
};

  /* ---------------Function Sort--------------------*/
export const filterBySort = (ordenSeleccionado, allData) => {
  let orderAZ = Array.from(allData);
  let orderZA = Array.from(allData);
  orderAZ =orderAZ.sort((a, b) => (a.name > b.name) ? 1 : -1);
  orderZA =orderZA.sort((a, b) => (b.name > a.name) ? 1 : -1);
  if(ordenSeleccionado === "a-z"){
    return orderAZ;
  } else{
    return orderZA;
  }
};


/* -------------- Cara trasera de la tarjeta--------------------*/

  // let evolution = '';
  // let nextEvolution = '';
  // let prevEvolution = '';
  // let prevPrevEvolution = '';

  // if (elemento.evolution.hasOwnProperty("next-evolution")){
  //   evolution = elemento.evolution["next-evolution"][0].name;

  //   if(elemento.evolution["next-evolution"][0].hasOwnProperty("next-evolution")){
  //   nextEvolution = elemento.evolution["next-evolution"][0]["next-evolution"][0].name;
  //   } else if (elemento.evolution.hasOwnProperty("prev-evolution")){
  //     prevEvolution = elemento.evolution["prev-evolution"][0].name;
  //   }
  // } else if (elemento.evolution.hasOwnProperty("prev-evolution")){
  //   prevEvolution = elemento.evolution["prev-evolution"][0].name;
  //   if(elemento.evolution["prev-evolution"][0].hasOwnProperty("prev-evolution")){
  //   prevPrevEvolution = elemento.evolution["prev-evolution"][0]["prev-evolution"][0].name;
  //   }
  // }

  // `<div class="cardPokemon-back">
  // <h2 class="region">Region:${elemento.generation.name}</h2></br>
  // <h2 class="resistant">Resistant:${elemento.resistant}</h2></br>
  // <h2 class="weakness">Weakness:${elemento.weaknesses}</h2><br></br>
  // <h2>Evolutions</h2></br>
  // <h3 class="evolution">${evolution}</h3></br>
  // <h3 class="next-evolution">${nextEvolution}</h3></br>
  // <h3 class="prev-evolution">${prevEvolution}</h3></br>
  // <h3 class="prev-evolution">${prevPrevEvolution}</h3><br>
  // <input class="moreInfo" type="button" id="btnMoreInfo" value="More Info">
  //</div>`}