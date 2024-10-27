async function getUsers(params) {
    const resposta = await fetch('https://dummyapi.io/data/v1/user?created=1', {
        headers: {
            'app-id': '214152r1g3reqwd13'
        }
    })
    const users = await resposta.json();

    console.log(users);
}

getUsers();

async function getUser(params) {
    
}

async function createUser(params) {
    const userData = {
        firstName: 'Walisson',
        lastName: 'Silva',
        email: 'walisson@test.com'
    }

    try {
        await fetch('https://dummyapi.io/data/v1/user/create', {
            method: 'POST',
            headers: {
                'app-id': '214152r1g3reqwd13',
                "Content-Type": "application/json",
            },
            // o fetch só aceita string
            body: JSON.stringify(userData)
        })
    } catch (error) {
        console.log('deu erro', error);
    }

}