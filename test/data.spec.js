import { dataPokemon, anotherExample } from '../src/data.js';


describe('dataPokemon', () => {
  it('is a function', () => {
    expect(typeof dataPokemon).toBe('function');
  });

  it.skip('returns `example`', () => {
  //  expect(dataPokemon()).toBe('dataPokemon');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    //expect(anotherExample()).toBe('OMG');
  });
});
