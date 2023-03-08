// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };

//   const { nationality = 'Brazilian' } = person;

//   console.log(person);

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

// const numeros = [1, 2, 3, 4];
// const [primeiro, segundo, terceiro, quarto, quinto = 5] = numeros;
// console.log(primeiro, segundo, terceiro, quarto, quinto);

const pessoa = {
    nome: 'João',
    endereco: {
        cidade: 'São Paulo'
    }
};
const { nome, endereco: { cidade, estado = 'SP' } } = pessoa;
console.log(nome, cidade, estado); // João São Paulo SP
