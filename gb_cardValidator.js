function cardValidator(value) {
  // Condição responsável por verificar se o array está vazio
  if (/^\s*$/.test(value)) {
    throw new Error('Dado de entrada indefinido');
  }

  // Condição responsável por verificar se o dado de entrada é uma string
  if (typeof value !== 'string') {
    throw new TypeError('Dado de entrada deve ser uma string');
  }

  // Condição responsável por verificar se os caracteres não são números
  if (/[^0-9]/.test(value)) {
    throw new Error('Dado de entrada inválido. O dado deve conter somente números');
  }
    
  // Condição responsável por verificar se o número do cartao de crédito é valido ou não 
  var arrString = value.split('');
  arrString.reverse();
  var arrNumber = [];
    
  for (var i in arrString) {
    arrNumber.push(parseInt(arrString[i]));
  }

  for (var i = 1; i < arrNumber.length; i += 2) {
    if ((arrNumber[i] * 2) > 9) {
      arrNumber[i] = (Math.trunc((arrNumber[i] * 2) / 10)) + ((arrNumber[i] * 2) % 10);
    } else {
      arrNumber[i] = arrNumber[i] * 2;
    }
  }
  var sum = arrNumber.reduce((val, i) => val + i, 0);
  if (sum % 10 === 0) {
    console.log('Número de cartão de crédito válido');
    return true;
  }
  else {
    console.log('Número de cartão de crédito inválido');
    return false;
  }

};

module.exports.cardValidator = cardValidator;

