const anguloDoTriangulo1 = 100;
const anguloDoTriangulo2 = 50;
const anguloDoTriangulo3 = 30;
const somaDosAngulos = anguloDoTriangulo1 + anguloDoTriangulo2 + anguloDoTriangulo3;
const verificador = somaDosAngulos === 180 && somaDosAngulos >= 0;

if (somaDosAngulos < 0) {
    console.log('Erro. Ângulo inválido.');
} else if (verificador === true) {
    console.log(verificador);
} else if (verificador === false) {
    console.log(verificador);
}