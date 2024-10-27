// A promise é um objeto que guarda a promessa de algo que será realizado. É útil para casos com operações assíncronas.
// A promise tem 3 estados:
// 1. Pending - pendente
// 2. Fullfilled - realizada com sucesso
// 3. Rejected - rejeitada por erro
// Exemplo de uso: pegar dados da API

const fs = require('fs');
const promessa = new Promise((resolve, reject) => {

console.log('Antes da função de ler o arquivo.');

    fs.readFile('./1-javascript/8-javascript-avancado-1/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro) {
        reject('Ocorreu um erro ao tentar ler o arquivo.', erro);
    } else {
        resolve(String(conteudoDoArquivo));
    }
    });
});

// Funções nas promises
// then - deu certo
// catch - deu erro
promessa
    .then((retornoResolve) => {
        console.log('Deu certo', retornoResolve);
    })
    .catch((erro) => {
        console.log('Deu ruim', erro);
    })
    .finally(() => {
        console.log('Vai ser executado quando a promessa for encerrada, com sucesso ou erro');
    })
;

// fetch - é uma função que retorna uma promessa
// No JavaScript é comum ter funções assíncronas

function lerArquivoPromise() {
    return new Promise((resolve, reject) => {

    console.log('Antes da função de ler o arquivo.');
    
        fs.readFile('./1-javascript/8-javascript-avancado-1/arquivo.txt', (erro, conteudoDoArquivo) => {
        if(erro) {
            reject('Ocorreu um erro ao tentar ler o arquivo.', erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
        });
    });
}

lerArquivoPromise()
    .then((retornoResolve) => {
        console.log('Deu certo', retornoResolve);
    })
    .catch((erro) => {
        console.log('Deu ruim', erro);
    })
    .finally(() => {
        console.log('Vai ser executado quando a promessa for encerrada, com sucesso ou erro');
    })
;