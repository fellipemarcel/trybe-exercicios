const techList = (arrayOfTechs, name) => {
    if (arrayOfTechs.length === 0) return 'Vazio!';
    const sortedArr = arrayOfTechs.sort();
    const techsList = [];
    for (let index = 0; index < sortedArr.length; index += 1) {
        techsList.push({
            tech: sortedArr[index],
            name,
        });
    }
    return techsList;
};

module.exports = techList;