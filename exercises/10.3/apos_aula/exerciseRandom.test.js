const randomNumber = require('./exercise01');

describe('Desafio 01', () => {
  test('Desafio 01', () => {
    const randomNumberMock = jest.fn(randomNumber).mockReturnValue(10);
  
    expect(randomNumberMock()).toBe(10);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 02', () => {
  test('divisao', () => {
    const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation((a, b) => a / b);
  
    expect(randomNumberMock(10, 2)).toBe(5);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 03', () => {
  const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation((a, b, c) => a * b * c);

  test('multiplacacao', () => {
    expect(randomNumberMock(10, 2, 5)).toBe(100);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })

  test('dobro', () => {
    randomNumberMock.mockReset();
    expect(randomNumberMock).toHaveBeenCalledTimes(0);

    randomNumberMock.mockImplementation(a => a * 2);

    expect(randomNumberMock(4)).toBe(8);
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})

describe('Desafio 04', () => {
  test('first', () => {
    const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation(a => a.toUpperCase())
    expect(randomNumberMock('osvaldo')).toBe('OSVALDO');  
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
  
  test('second', () => {
    const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation(a => a.substr(0, 1))

    expect(randomNumberMock('osvaldo')).toBe('o');
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })

  test('third', () => {
    const randomNumberMock = jest.fn(randomNumber)
    .mockImplementation((a, b) => a.concat(b));  

    expect(randomNumberMock('osvaldo', 'Borges')).toBe('osvaldoBorges');
    expect(randomNumberMock).toHaveBeenCalledTimes(1);
  })
})
