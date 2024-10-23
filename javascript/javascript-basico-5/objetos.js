// object literal
const idade = 27;
const altura = 1.77;

const pessoa = {
    nome: 'Walisson',
    // a segunda 'altura' é o valor da variável altura
    altura: altura,
    // se o nome do atributo for igual ao nome da variável do valor, não precisa repetir:
    idade,
    eProgramador: true,
    hobbies: ['Jogar FIFA', 'Academia', 'Ler'],
    'nome do pai': 'Ronaldo',
    funcaoAnonima: function () {
        return 'Eu sou o Walisson';
    },
    arrowFunction: () => {
        return 'Eu sou o arrowFunction do Walisson!';
    }
};

console.log(pessoa.hobbies);
console.log(pessoa['idade']);
console.log(pessoa['nome do pai']);

pessoa.profissao = 'Professor';
pessoa.nome = 'Walisson Silva';
delete pessoa.altura;

console.log(pessoa);

console.clear();

console.log(pessoa.arrowFunction());

console.clear();

// desestruturação
const { nome, eProgramador } = pessoa;
console.log(nome);
console.log(pessoa);