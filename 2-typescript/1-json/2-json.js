// 1. facil interpretação/leitura e escrita/geração.
// 2. maior velocidade na execução e transporte de dados.
// 3. arquivo com tamanho reduzido
// 4. fácil de realizar o parsing.

// Onde é utilizado:
// Arquivos de configuração / transferência de dados: API

// Lidando com JSON no JavaScript:
// 1. Ler arquivo JSON
// const fs = require('fs');
// fs.readFile('./typescript/1-json/1-exemplo.json', (erro, dados) => {
//     if(erro) {
//         console.log('Erro:', erro);
//     } else {
//         console.log(JSON.parse(dados));
//         console.log(typeof dados);
//     }
// })

// 2. Converter JSON em formato string para objeto

const jsonString = '{"nome": "Walisson"}';
console.log(JSON.parse(jsonString));

console.clear();
// 3. Converter um objeto do JS em JSON (string)
const pessoa = {
    nome: 'Tony Stark',
    papel: 'Homem de Ferro',
}

console.log(JSON.stringify(pessoa));