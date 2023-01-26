function positivo(numero) {
    if (numero > 0) {
        return numero + ' é positivo!';
    } else if (numero < 0) {
        return numero + ' é negativo!';
    } else {
        return 'Zero';
    }
}

console.log(positivo(0));