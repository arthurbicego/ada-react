// O await só pode ser usado dentro de uma função assíncrona. É necessário o uso de try catch para tratar erros para o await.
// Usar o async e await é a melhor e mais recomendada maneira de lidar com as funções assíncronas. Devido ao 'callback hell' que pode acontecer tanto com
// callbacks quanto com promises. Porém, depende também de como a função é, se ela já é uma promise, como eu quero estrutura meu código, etc.

const fs = require('fs');
function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1-javascript/8-javascript-avancado-1/arquivo.txt', (erro, conteudoDoArquivo) => {
        if(erro) {
            reject('Ocorreu um erro ao tentar ler o arquivo.', erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
        });
    });
}

async function leituraDeDados() {
    console.log('Isso é executado ANTES da promise ser resolvida!');

    try {
        const retornoPromessa = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar no código
        
        console.log(retornoPromessa);
        console.log('Isso é executado DEPOIS da promise ser resolvida!');
    } catch(e) {
        console.log(e);
        console.log('Isso é executado DEPOIS da promise com ERRO.');
    } finally {
        console.log('Executa ao final da promise em qualquer caso.')
    }
};

leituraDeDados();