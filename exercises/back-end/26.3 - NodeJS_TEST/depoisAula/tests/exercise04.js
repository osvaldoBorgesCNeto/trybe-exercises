const fs = require('fs');
const sinon = require('sinon');

const { expect } = require('chai');

const exercise05 = require('../exercises/exercise05');

CONTEUDO_DO_ARQUIVO = "Ola Mundo";

describe("Exercise 04", () => {

  describe("Leu o arquivo", () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });
    
    it('E igual ao conteúdo do arquivo', () => {
      const resposta = exercise05('arquivo.txt');
      
      expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
    });
  });

  describe("N'ao leu o arquivo", () => {
    it("Deu erro o resultado [e null", () => {
      const resposta = exercise05('arquivo.txt');
      
      expect(resposta).to.be.equals(null);
    });
  });
});