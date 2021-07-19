import { dataPokemon, filterPokemon, filterType, filterBySort} from '../src/data.js';

const result =
[
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
  {num: '004', name: 'charmander', type: ['fire' ]},
  {num: '005', name: 'charmeleon', type: [ 'fire' ]},
  {num: '251', name: 'celebi', type: [ 'psychic', 'grass']},
]

describe('dataPokemon', () => {
  it('is a function', () => {
    expect(typeof dataPokemon).toBe('function');
  });

  it('debería retornar String para dataPokemon.name', () => {
    expect(typeof dataPokemon.name).toBe('string');
  });
});

describe('filterPokemon', () => {
  it('is a function', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  // it('debería retornar String para dataPokemon.name', () => {
  //   expect(typeof filterPokemon.name).toBe('string');
  // });
  it ('deberia retornar Bulbasaur para filterPokemon', () => {
    expect (result[0].name).toEqual('bulbasaur');
  })

});

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  // it.skip('returns `example`', () => {
  // //  expect(dataPokemon()).toBe('dataPokemon');
  // });
});

describe('filterBySort', () => {
  it('is a function', () => {
    expect(typeof filterBySort).toBe('function');
  });

  // it.skip('returns `example`', () => {
  // //  expect(dataPokemon()).toBe('dataPokemon');
  // });
});
