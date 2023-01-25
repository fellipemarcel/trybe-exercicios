let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    // console.log(numbers[index]);
    soma = soma + numbers[index];
}

let media = soma / numbers.length;

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

let biggestNumberIs = numbers[0];

for (let biggestNumber = 1; biggestNumber < numbers.length; biggestNumber += 1) {
    if (numbers[biggestNumber] > biggestNumberIs) {
        biggestNumberIs = numbers[biggestNumber];
    }
}

console.log(biggestNumberIs);