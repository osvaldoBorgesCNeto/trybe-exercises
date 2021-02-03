const { test } = require('@jest/globals');
const sum = require('./sum');

describe('Parte 01', () => {
  test('sums two values', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('sums two values', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('sums two values', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test('sums two values', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
})

describe('Parte 02', () => {
  
})