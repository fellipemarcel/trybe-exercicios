const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
});
console.log(pessoasAprovadas);