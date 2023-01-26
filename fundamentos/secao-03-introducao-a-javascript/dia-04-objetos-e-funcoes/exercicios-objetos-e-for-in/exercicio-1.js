let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem-vinda, ' + info.personagem);

info['recorente'] = 'Sim';

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key]);
}

let novaInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && novaInfo[key] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + novaInfo[key]);
    }
}