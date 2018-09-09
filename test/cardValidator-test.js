const mocha = require('mocha');
const chai = require('chai');
const cardCheck = require('../gb_cardValidator');
const expect = chai.expect;

describe('Credit card number validation tests using Lunh algoritm', () => {
  describe("#cardValidator", () => {
    describe("Quando o array está vazio", () => {
      it("Deve retornar erro", () => {
        var badFn = function () {cardCheck.cardValidator('')};
        expect(badFn).to.throw('Dado de entrada indefinido');
      });
    });
    describe("Quando o valor de entrada contém caracteres não numéricos", () => {
      it("Deve retornar erro", () => {
        var badFn = function () {cardCheck.cardValidator('abc-jop')};
        expect(badFn).to.throw('Dado de entrada inválido. O dado deve conter somente números');
      });
    });
    describe("Quando o valor de entrada é um número com dígitos", () => {
      it("Deve retornar erro", () => {
        var badFn = function () {cardCheck.cardValidator('22445666.35')};
        expect(badFn).to.throw('Dado de entrada inválido. O dado deve conter somente números');
      });
    });
    describe("Quando o número do cartão de crédito é válido", () => {
      it("Número válido", () => {
        expect(cardCheck.cardValidator('36490102462661')).to.be.true;
      });
    });
    describe("Quando o número do cartão de crédito é inválido", () => {
      it("Número Inválido", () => {
        expect(cardCheck.cardValidator('36590102462661')).to.be.false;
      });
    });
  });
});