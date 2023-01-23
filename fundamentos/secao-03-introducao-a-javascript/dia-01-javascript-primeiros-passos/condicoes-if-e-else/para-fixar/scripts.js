const notaDaPessoaCandidata = 70;

if (notaDaPessoaCandidata >= 80) {
    console.log('Parabéns, você faz parte do grupo das pessoas aprovadas!');
} else if (notaDaPessoaCandidata < 80 && notaDaPessoaCandidata >= 60) {
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Infelizmente, você reprovou.')
}