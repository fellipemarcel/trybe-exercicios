const notaEmPorcentagem = 50;

if (notaEmPorcentagem < 0 || notaEmPorcentagem > 100) {
    console.log('Erro. Nota inválida.');
} else if (notaEmPorcentagem >= 90) {
    console.log('Nota A.');
} else if (notaEmPorcentagem >= 80) {
    console.log('Nota B.');
} else if (notaEmPorcentagem >= 70) {
    console.log('Nota C.');
} else if (notaEmPorcentagem >= 60) {
    console.log('Nota D.');
} else if (notaEmPorcentagem >= 50) {
    console.log('Nota E.');
} else if (notaEmPorcentagem < 50) {
    console.log('Nota F.');
}