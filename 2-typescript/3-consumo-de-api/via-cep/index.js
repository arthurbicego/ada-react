console.log('fetch api');

// https://viacep.com.br/ws/01001000/json/

// then/catch
fetch('https://viacep.com.br/ws/01001000/json/')
    .then((response) => {
        response.json().then((dados) => console.log(dados));
    })
    .catch((e) => {
        console.log(e);
    })
;

// async/await

async function obterDadosCep () {

    try {
        const resposta = await fetch('https://viacep.com.br/ws/01001000/json/');
        const dados = await resposta.json();
    
        console.log(dados);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('terminou a requisição');
    }
};

obterDadosCep();