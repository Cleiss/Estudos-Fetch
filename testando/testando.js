const url = "http://localhost:3000/User"
const imprimir = document.getElementById('imprimir')

const editar = document.getElementById('editar')
const deletar = document.getElementById('deletar')
const mensagem = document.getElementById('mensagem')


const response = fetch(url)

imprimir.onclick = function() {
    
    response
    .then((resp) => {

        return resp.json()

    }).then(function(resp) {

            mensagem.innerHTML = resp.idade
            console.log(resp)

    }).catch((e) => {

        console.log('Deu erro' + e)
    })
}

cadastrar.onclick = () => {

    const headers = {
        "Content-Type": "application/json"
    }
    
    const init = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            nome: nome.value,
            login: login.value,
            senha: senha.value,
            cpf: cpf.value,
            idade: idade.value
        })
    }
    
    const cadastro = fetch("http://localhost:3000/User/", init)

    cadastro
    .then((resp) => {

        return resp.json()

    }).then(function(resp) {

    }).catch((e) => {

        console.log('Deu erro' + e)
    })

}


