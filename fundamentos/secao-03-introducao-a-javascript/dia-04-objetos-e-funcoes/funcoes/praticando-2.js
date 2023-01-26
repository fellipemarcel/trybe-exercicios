const num1 = 1000;
const num2 = 5000;

function maiorDeDoisNumeros() {
    if (num1 > num2) {
        return num1 + ' é maior que ' + num2 + '!';
    } else {
        return num2 + ' é maior que ' + num1 + '!';
    }
}

console.log(maiorDeDoisNumeros());