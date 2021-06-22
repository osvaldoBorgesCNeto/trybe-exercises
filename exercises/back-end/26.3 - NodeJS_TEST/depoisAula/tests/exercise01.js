const { expect } = require('chai');

const exercise02 = require('../exercises/exercise02');

describe("Exercise 01", () => {
  it("Numero passado for maior que 0 devera retorna 'Positivo'", () => {
    const result = exercise02(1);

    expect(result).to.be.equals("Positivo")
  });
  
  it("Numero passado for menor que 0 devera retorna 'Negativo'", () => {
    const result = exercise02(-1);

    expect(result).to.be.equals("Negativo")
  });

  it("Numero passado for igual 0 devera retorna 'Neutro'", () => {
    const result = exercise02(0);

    expect(result).to.be.equals("Neutro")
  });

  it("Numero passado nao [e do tipo 'Number'", () => {
    const result = exercise02("1");

    expect(result).to.be.equals("O valor deve ser um número")
  });
});