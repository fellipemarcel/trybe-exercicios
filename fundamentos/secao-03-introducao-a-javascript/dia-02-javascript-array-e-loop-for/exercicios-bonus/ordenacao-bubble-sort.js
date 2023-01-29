let numbersCrec = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbersCrec.length; index += 1) {
     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
         if (numbersCrec[index] < numbersCrec[secondIndex]) {
             let position = numbersCrec[index];
            numbersCrec[index] = numbersCrec[secondIndex];
            numbersCrec[secondIndex] = position;
        }
     }
 }

console.log(numbersCrec);

let numbersDec = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbersDec.length; index += 1) {
     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
         if (numbersDec[index] > numbersDec[secondIndex]) {
             let position = numbersDec[index];
            numbersDec[index] = numbersDec[secondIndex];
            numbersDec[secondIndex] = position;
        }
     }
 }

console.log(numbersDec);