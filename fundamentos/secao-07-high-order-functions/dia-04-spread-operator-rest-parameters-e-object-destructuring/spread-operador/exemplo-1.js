const arr = ['Fellipe', 'João', 'Pedro'];
const newArr = [...arr, 'Vanessa'];
// console.log(arr);
// console.log(newArr);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

const streamingService = {
    name: 'Netflix',
    plan: '4K',
};

const newProp = {...streamingService, price: 55.90};
// console.log(newProp);

const people = {
    name: 'Fellipe',
    age: 27,
};

const birthday = {
    birthDate: '25/05/95',
};

const completePeople = {...people, ...birthday};
// console.log(completePeople);

const numbers = [1, 10, 100, 1000, 10000, 100000];
// console.log(Math.max(...numbers));