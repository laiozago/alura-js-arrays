const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [
    ...numerosPares,
    ...numerosImpares
];

const [num1, num2, ...outrosNumeros] = numeros;

const [nome1 = 'Laio'] = ['Zago'];

const pessoa = {
    nome: 'Laio',
    sobrenome: 'Zago',
    idade: 30
}
const pessoaComTelefone = {
    ...pessoa,
    telefone: 123456789
};
const {nome, sobrenome, idade, telefone} = pessoaComTelefone;

function imprimeDados({nome, sobrenome, idade}) {
    console.log(`${nome} ${sobrenome} tem ${idade} anos.`);
}

//console.log(nome, sobrenome, idade, telefone);
imprimeDados(pessoa);

console.log(numeros);