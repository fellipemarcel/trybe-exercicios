let pizzas = {
    sabor: 'Palmito',
    preco: 39.99,
    borda: true,
};

for (let key in pizzas) {
    console.log(pizzas);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}