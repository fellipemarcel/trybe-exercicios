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

const estudante = {
  name: 'Fellipe Marcel',
};

estudante.email = 'fmrclms@gmail.com';
estudante['telefone'] = '71999453156';

const addProperty = (obj, property, value) => {
  obj[property] = value;
};

addProperty(estudante, 'linkedIn', 'https://www.linkedin.com/in/fellipe-marcel-99961a251/');
addProperty(estudante, 'gitHub', 'https://github.com/fellipemarcel');

console.log(estudante);