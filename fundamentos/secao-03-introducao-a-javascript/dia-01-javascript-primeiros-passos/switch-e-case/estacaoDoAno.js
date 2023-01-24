let mes = 'maio';
let estacaoDoAno = '';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'primavera';
        break;
    default:
        console.log('Ops! Mês inválido.');
}

console.log(estacaoDoAno)