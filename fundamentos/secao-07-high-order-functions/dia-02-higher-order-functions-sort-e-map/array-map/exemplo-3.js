const numbers = [ 1, 2, 3, 4, 5, 6];
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
console.log(negativeNumbers);