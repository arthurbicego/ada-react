var nome = 'Arthur Bicego Quintaneira';
var idade = 28;

// O JavaScript infere automaticamente a tipagem. Você pode conferir o tipo usando typeof.
console.log(typeof nome);

// NÃO utilize o var no javascript. Sempre use let ou const. Motivos:
// hosting: no var, o espaço da memória já é alocado para as variáveis antes de
// elas receberem o valor. Exemplo, o código aceita um console.log de uma variável vem depois no código (imprime undefined).
// escopos: var é global - qualquer lugar do código
let energia = 0;
const velocidadeDaLuz = 6*10**23;
const massa = 23;

energia = massa * velocidadeDaLuz ** 2
console.log(energia);

// Biblioteca Math

// Pegar input do usuário: window.prompt ou apenas prompt:
// const idadeNavegador = prompt('Qual é a sua idade?');

// console.log(idadeNavegador);

// Pegar input do usuário através do terminal - biblioteca readline-sync:
const prompt = require('readline-sync');
let idadeUsuario = prompt.question('Qual é a sua idade? ');
console.log(idadeUsuario, typeof idadeUsuario);

// Coerção de tipos - explícita e implícita.
// explícita:
idadeUsuario = Number(idadeUsuario);
console.log(idadeUsuario, typeof idadeUsuario);

// implícita - a soma de um número com string sempre é presumida em concatenação de strings:
console.log(1 + "1");
console.log(10 - "5");