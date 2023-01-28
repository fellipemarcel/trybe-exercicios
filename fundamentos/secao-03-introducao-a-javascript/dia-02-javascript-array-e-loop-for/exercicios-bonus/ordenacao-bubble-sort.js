let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
         if (numbers[index] > numbers[secondIndex]) {
             let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
     }
 }

console.log(numbers);

let novoArr = [];

for (let index = 0; index < numbers.length; index += 1) {
    for (let segundoIndex = 1; segundoIndex < index; index += 1) {
        novoArr.push(numbers[index] * numbers[segundoIndex]);
    }
}

console.log(novoArr);