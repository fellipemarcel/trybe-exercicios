const romanNumbersMeaning = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
}

const romanNumberTranslator = (string) => {
    let sum = 0;
    
    for (let iString = 0; iString < string.length; iString += 1) {
        for (key in romanNumbersMeaning) {
            if (string[iString] === key) {
                sum += romanNumbersMeaning[key];
            }
        }
    }
    return sum;
}

console.log(romanNumberTranslator('IV'));