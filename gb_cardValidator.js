function cardValidator(value) {
  // Condi��o respons�vel por verificar se o array est� vazio
  if (/^\s*$/.test(value)) {
    throw new Error('Dado de entrada indefinido');
  }

  // Condi��o respons�vel por verificar se o dado de entrada � uma string
  if (typeof value !== 'string') {
    throw new TypeError('Dado de entrada deve ser uma string');
  }

  // Condi��o respons�vel por verificar se os caracteres n�o s�o n�meros
  if (/[^0-9]/.test(value)) {
    throw new Error('Dado de entrada inv�lido. O dado deve conter somente n�meros');
  }
    
  // Condi��o respons�vel por verificar se o n�mero do cartao de cr�dito � valido ou n�o 
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
    console.log('N�mero de cart�o de cr�dito v�lido');
    return true;
  }
  else {
    console.log('N�mero de cart�o de cr�dito inv�lido');
    return false;
  }

};

module.exports.cardValidator = cardValidator;

