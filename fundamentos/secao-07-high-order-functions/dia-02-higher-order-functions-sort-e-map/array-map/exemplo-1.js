const element = [
    { firstName: 'Fellipe', lastName: 'Marcel' },
    { firstName: 'Antônio', lastName: 'Carlos'},
    { firstName: 'José', lastName: 'Lucas' },
    { firstName: 'João', lastName: 'Maurício' },
];

const fullNames = element.map((element) => `${element.firstName} ${element.lastName}`);

console.log(fullNames);