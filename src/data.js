/* eslint-disable no-prototype-builtins */
// estas funciones son de ejemplo

export const dataPokemon = (elemento) => {
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

    return `<article class="cardPokemon-front">
    <h1 class="namePokemon">${elemento.name}</h1>
    <h1 class="numPokemon">${elemento.num}</h1><br></br>
    <img src="${elemento.img}" alt="" class="imgPokemon">
    <h4 class="typePokemon">${elemento.type}</h4>
  </article>
  <article class="cardPokemon-back">
  <h2 class="region">${elemento.generation.name}</h2>
  <h2 class="resistant">${elemento.resistant}</h2>
  <h2 class="weakness">${elemento.weaknesses}</h2>
  <h3 class="evolution">${evolution}</h3>
  <h3 class="next-evolution">${nextEvolution}</h3>
  <h3 class="prev-evolution">${prevEvolution}</h3>
  <h3 class="prev-evolution">${prevPrevEvolution}</h3><br></br>
  </article>
  `
  };


  export const anotherExample = () => {
    return 'OMG';
  };