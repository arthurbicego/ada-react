// No JavaScript a programação assíncrona pode ser aplicada de três formas:
// 1. Callbacks (chamada de retorno);
// 2. Promises
// 3. Resolvendo promises utilizando async/await

// CALLBACKS
// 'fs' é uma função assíncrona do Node (ler um arquivo leva um tempo)
const fs = require('fs');

console.log('Antes da função de ler o arquivo.');

fs.readFile('./1-javascript/8-javascript-avancado-1/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro) {
        console.log('Ocorreu um erro ao tentar ler o arquivo.', erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
})

console.log('Depois da função de ler o arquivo.');

// setTimeout (função que cria um timer)
console.log('ANTES do setTimeout...');

setTimeout(() => {
    console.log('Isso aqui vai ser executado após 2 segundos.');
}, 2 * 1000);

console.log('---DEPOIS do setTimeout...');