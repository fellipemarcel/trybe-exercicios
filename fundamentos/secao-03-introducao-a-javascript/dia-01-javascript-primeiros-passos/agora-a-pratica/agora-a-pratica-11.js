let aliquotaInss = 0;
let aliquotaIr = 0;
let salarioBruto = 3000;
let salarioLiquido = 0;


if (salarioBruto <= 1556.94) {
    aliquotaInss = (8 * salarioBruto) / 100;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = (9 * salarioBruto) / 100;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = (11 * salarioBruto) / 100;
} else {
    aliquotaInss = 570.88
}

let salarioBase = salarioBruto - aliquotaInss;

console.log(salarioBase);

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIr = ((7.5 * salarioBase) / 100) - 142.80;
}

console.log(aliquotaIr);
// salario bruto = 3000,00
// inss - 11% = 340,00
// salário base = salario bruto - inss = 920,00
// imposto de renda = até 
// salario base = 2670,00