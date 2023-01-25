let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    // console.log(numbers[index]);
    soma = soma + numbers[index];
}

let media = soma / numbers.length;

if (media > 20) {
    console.log('O valor da média dos números é maior que 20.');
} else {
    console.log('O valor da média dos números é menor que 20.');
}

let biggestNumberIs = numbers[0];

for (let biggestNumber = 1; biggestNumber < numbers.length; biggestNumber += 1) {
    if (numbers[biggestNumber] > biggestNumberIs) {
        biggestNumberIs = numbers[biggestNumber];
    }
}

console.log('O maior número do array é: ' + biggestNumberIs + '!');

let oddNumbersCount = 0;

for (let oddNumber = 0; oddNumber < numbers.length; oddNumber += 1) {
    if (numbers[oddNumber] % 2 !== 0) {
        oddNumbersCount += 1;
    }
}

console.log('Quantidade de números ímpares na array: ' + oddNumbersCount + '.');

if (oddNumbersCount === 0) {
    console.log('Nenhum valor Ímpar encontrado');
}