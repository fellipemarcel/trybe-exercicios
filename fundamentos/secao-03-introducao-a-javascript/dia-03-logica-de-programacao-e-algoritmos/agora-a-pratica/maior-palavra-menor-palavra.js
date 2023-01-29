let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let biggestWord = 0; biggestWord < array.length; biggestWord += 1) {
    if (array[biggestWord].length > maiorPalavra.length) {
        maiorPalavra = array[biggestWord];
    }
}

console.log(`A maior palavra do array é: "${maiorPalavra}".`);

for (let smallestWord = 0; smallestWord < array.length; smallestWord += 1) {
    if (array[smallestWord].length < menorPalavra.length) {
        menorPalavra = array[smallestWord];
    }
}

console.log(`A menor palavra do array é: "${menorPalavra}".`);