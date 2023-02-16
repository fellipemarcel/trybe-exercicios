const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

const adicionaPropriedade = (objeto, chave, valor) => {
    objeto[chave] = valor;
};

adicionaPropriedade(customer1, 'lastName', 'Silva');

console.table(customer1);