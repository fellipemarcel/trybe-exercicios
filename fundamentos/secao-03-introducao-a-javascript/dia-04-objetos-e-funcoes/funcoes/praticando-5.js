const angulo1 = -100;
const angulo2 = 50;
const angulo3 = 30;
const somaDosAngulos = angulo1 + angulo2 + angulo3;

function angulosTriangulo() {
    if (somaDosAngulos < 0) {
        return 'Erro: ângulo inválido.'
    } else if (somaDosAngulos === 180) {
        return true;
    } else {
        return false;
    }
}

console.log(angulosTriangulo());