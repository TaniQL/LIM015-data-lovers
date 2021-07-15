import { dataPokemon, filterPokemon, filterType, filterBySort} from '../src/data.js';

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

  it('debería retornar String para dataPokemon.name', () => {
    expect(typeof filterPokemon.num).toBe('string');
  });
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
