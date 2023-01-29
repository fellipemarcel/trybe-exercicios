let maiorNumeroPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
    let primo = true;
    for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
        if (numeroAtual % divisorAtual === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorNumeroPrimo = numeroAtual;
    }
}

console.log(maiorNumeroPrimo);