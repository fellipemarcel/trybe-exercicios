const num1 = 10000;
const num2 = 1500;
const num3 = 2000;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' é o maior entre os três números.');
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' é o maior entre os três números.');
} else {
    console.log(num3 + ' é o maior entre os três números');
}