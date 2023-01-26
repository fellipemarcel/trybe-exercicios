let userStatus = 'deslogado';

function logarDeslogar() {
    if (userStatus === 'deslogado') {
        userStatus = 'logado';
    } else {
        userStatus = 'deslogado';
    }
}

console.log(userStatus); // deslogado

logarDeslogar();
console.log(userStatus); // logado

logarDeslogar();
console.log(userStatus); // deslogado

console.log('O usuário está ' + userStatus); // O usuário está deslogado