const num1 = 100;
const num2 = 200;
const num3 = 300;

function maiorDeTresNumeros() {
    if (num1 > num2 && num1 > num3) {
        return num1 + ' é o maior entre os três números.';
    } else if (num2 > num1 && num2 > num3) {
        return num2 + ' é o maior entre os três números';
    } else {
        return num3 + ' é o maior entre os três números';
    }
}

console.log(maiorDeTresNumeros());