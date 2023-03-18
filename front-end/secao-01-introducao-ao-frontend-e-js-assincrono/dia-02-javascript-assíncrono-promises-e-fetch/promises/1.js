const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = generateRandomNumber();
//             resolve(randomNumber);
//         }, 1000);
//     });

// resolvedPromise().then((res) => console.log(`Número aleatório: ${res}`));

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      }
      reject(new Error(`O número ${randomNumber} não é par.`));
    }, 1000);
  });

rejectedPromise()
.then((res) => console.log(`O número aleatório é: ${res}`))
.catch((error) => console.log(`Erro: ${error.message}`));