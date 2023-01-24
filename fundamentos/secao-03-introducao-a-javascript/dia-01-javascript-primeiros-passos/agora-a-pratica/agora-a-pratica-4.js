function positivoOuNegativo(valor) {
    if (valor > 0) {
        console.log(valor + ' é positivo.');
    } else if (valor < 0) {
        console.log(valor + ' é negativo');
    } else {
        console.log('Zero');
    }
    return valor;
}

positivoOuNegativo(500);