import { dataPokemon, filterRegion, filterType, filterBySort, computeStats} from '../src/data.js';

const datatest =
[
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ] ,"generation": { "num": "generation i", "name": "kanto"}},
  {num: '004', name: 'charmander', type: ['fire' ],"generation": { "num": "generation i", "name": "kanto"}},
  {num: '007', name: 'squirtle', type: ['water' ],"generation": { "num": "generation i", "name": "kanto"}},
  {num: '251', name: 'celebi', type: [ 'psychic', 'grass'],"generation": { "num": "generation ii", "name": "johto"}},
]

const datatestLeg =
[
  {num: '001', name: 'bulbasaur', "pokemon-rarity": 'normal' },
  {num: '144', name: 'articuno', "pokemon-rarity": 'legendary' },
  {num: '145', name: 'zapdos', "pokemon-rarity": 'legendary' },
  {num: '146', name: 'moltres', "pokemon-rarity": 'legendary' },

]

describe('dataPokemon', () => {
  it('is a function', () => {
    expect(typeof dataPokemon).toBe('function');
  });

});


describe('filterRegion', () => {
  it('is a function', () => {
    expect(typeof filterRegion).toBe('function');
  });

  it ('deberia retornar Johto para filterRegion', () => {
    const result = filterRegion('johto',datatest);
    expect (result[0].name).toEqual('celebi');
  })

});

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it ('deberia retornar Celebi para filterType', () => {
    const result = filterType('psychic',datatest);
    expect (result[0].name).toEqual('celebi');
  })
});

describe('filterBySort', () => {
  it('is a function', () => {
    expect(typeof filterBySort).toBe('function');
  });

  it ('deberia retornar Squirtle como primer nombre cuando ordena de Z-A', () => {
    const result = filterBySort('z-a',datatest);
    expect (result[0].name).toEqual('squirtle');
  })
  it ('deberia retornar Bulbasaur como primer nombre cuando ordena de A-Z', () => {
    const result = filterBySort('a-z',datatest);
    expect (result[0].name).toEqual('bulbasaur');
  })
});


describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it (' no deberia retornar bulbasaur para ComputeStats', () => {
    const result = computeStats('legendary',datatestLeg);
    expect (result[0].name).not.toEqual('bulbasaur');
  })
});
