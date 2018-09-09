const mocha = require('mocha');
const chai = require('chai');
const cardCheck = require('../gb_cardValidator');
const expect = chai.expect;

describe('Credit card number validation tests using Lunh algoritm', () => {
  describe("#cardValidator", () => {
    describe("Quando o array est� vazio", () => {
      it("Deve retornar erro", () => {
        var badFn = function () {cardCheck.cardValidator('')};
        expect(badFn).to.throw('Dado de entrada indefinido');
      });
    });
    describe("Quando o valor de entrada cont�m caracteres n�o num�ricos", () => {
      it("Deve retornar erro", () => {
        var badFn = function () {cardCheck.cardValidator('abc-jop')};
        expect(badFn).to.throw('Dado de entrada inv�lido. O dado deve conter somente n�meros');
      });
    });
    describe("Quando o valor de entrada � um n�mero com d�gitos", () => {
      it("Deve retornar erro", () => {
        var badFn = function () {cardCheck.cardValidator('22445666.35')};
        expect(badFn).to.throw('Dado de entrada inv�lido. O dado deve conter somente n�meros');
      });
    });
    describe("Quando o n�mero do cart�o de cr�dito � v�lido", () => {
      it("N�mero v�lido", () => {
        expect(cardCheck.cardValidator('36490102462661')).to.be.true;
      });
    });
    describe("Quando o n�mero do cart�o de cr�dito � inv�lido", () => {
      it("N�mero Inv�lido", () => {
        expect(cardCheck.cardValidator('36590102462661')).to.be.false;
      });
    });
  });
});