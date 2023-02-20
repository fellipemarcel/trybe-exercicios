const hydrate = (string) => {
    const splittedString = string.split('');
    let glassesOfWater = 0;
    for (let index = 0; index < splittedString.length; index += 1) {
        const parsedAllChars = parseInt(splittedString[index]);
        if (parsedAllChars) glassesOfWater += parsedAllChars;
    }
    let glassWord = 'copo';
    if (glassesOfWater > 1) glassWord = 'copos';
    return `${glassesOfWater} ${glassWord} de água`
};

module.exports = hydrate;