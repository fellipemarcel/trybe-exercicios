const names = [ 'João', 'Otávio', 'Lucas', 'Isabela', 'Flávia'];

const people = names.map((name) => {
    const register = {};
    register.name = name;
    register.company = 'Testing';
    return register;
});

console.log(people);