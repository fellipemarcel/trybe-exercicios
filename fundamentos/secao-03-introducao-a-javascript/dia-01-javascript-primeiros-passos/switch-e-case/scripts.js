let faixaEtaria = 'criança';

switch (faixaEtaria) {
    case 'adolescente':
        console.log('Consulte a classificação indicativa do filme.');
        break;
    case 'adulto':
        console.log('A pessoa adulta é classificada para assistir qualquer filme');
        break;
    case 'idoso':
        console.log('A pessoa idosa é classificada para assistir qualquer filme');
        break;
    default:
        console.log('Só pode assistir filmes livres');
}