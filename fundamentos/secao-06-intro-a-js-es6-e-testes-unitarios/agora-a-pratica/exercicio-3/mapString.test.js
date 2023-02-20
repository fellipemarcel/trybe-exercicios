const {
    encode,
    decode,
} = require('./mapString');

describe('testando a função encode', () => {
    it('testando se a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('testando se encode é realmente uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it('testando conversão da vogal "a" em número 1', () => {
        expect(encode('palavra')).toEqual('p1l1vr1');
    });
    it('testando conversão da vogal "e" em número 2', () => {
        expect(encode('teste')).toEqual('t2st2');
    });
    it('testando conversão da vogal "i" em número 3', () => {
        expect(encode('imbecil')).toEqual('3mb2c3l');
    });
    it('testando conversão da vogal "o" em número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('testando conversão da vogal "u" em número 5', () => {
        expect(encode('urubu')).toEqual('5r5b5');
    });
    it('testando se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('teste').length).toEqual(5);
    });
});

describe('testando a função decode', () => {
    it('testando se a função decode é definida', () => {
        expect(decode).toBeDefined();
    });
    it('testando se decode é realmente uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it('testando conversão do número 1 em vogal "a"', () => {
        expect(decode('1n1')).toEqual('ana');
    });
    it('testando conversão do número 2 em vogal "e"', () => {
        expect(decode('b2b2')).toEqual('bebe');
    });
    it('testando conversão do número 3 em vogal "i"', () => {
        expect(decode('x3x3')).toEqual('xixi');
    });
    it('testando conversão do número 4 em vogal "o"', () => {
        expect(decode('4v4')).toEqual('ovo');
    });
    it('testando a conversão do número 5 em vogal "u"', () => {
        expect(decode('5mb5')).toEqual('umbu');
    });
    it('testando se o retorno da função tem o mesmo número de caracteres', () => {
        expect(decode('teste').length).toEqual(5);
    });
});