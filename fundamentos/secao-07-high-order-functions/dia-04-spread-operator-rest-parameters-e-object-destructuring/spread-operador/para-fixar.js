// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Melancia', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco de laranja', 'Leite em pó', 'Doce de leite'];

const fruitSalad = (fruit, additional) => {
  salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));