let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let carInfo in car) {
    console.log(carInfo, car[carInfo]);
}