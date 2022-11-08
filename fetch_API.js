const botao = document.getElementById('botao')

const headers = {
    'Content-Type': 'application/json',
    'Testando': 'Teste'
}

const init = {
    method:'GET',
    headers: headers,
    
}

//fetch API
const response = fetch('https://jsonplaceholder.typicode.com/users', init) //pega dados da API e retorna uma promise
                                                                           //init envia dados de cabeçalho/headers
.then(function (respdados){ //pega os dados da promise

    return respdados.json() //converte os dados para json e retorna outra promise com os dados json
})
.then(function(jsondados){ //trata os dados json da promise

    /*for (const nomes of jsondados) {
        console.log(nomes)
    }*/
    console.log(jsondados)
    botao.value = jsondados[7].name
    botao.onclick = function(){
        alert(jsondados[7].name)
    }
})
.catch(function(e){ //captura o erro retornado
    console.log(e)
})

//forma mais simples de fetch API
/*(async function(){
    
    try{
        const headers = {
            'Content-Type': 'application/json',
            'Testando': 'Teste'
        }
        
        const init = {
            headers: headers
        }

        const respdados = await fetch('https://jsonplaceholder.typicode.com/users', 
        init)
        //fetch('url') => pega dados da API e retorna uma promise
        //const respdados = await => substitui o .then(), pega os dados da promise e converte para json
        //retorna outra promise com os dados json
        const jsondados = await respdados.json()
        //substitui o .then() e trata os dados json da promise anterior

        console.log(jsondados)
        botao.value = jsondados[0].name
        
    } catch(e){ //captura o erro retornado
        console.log(e)
    }
})()

const botao = document.getElementById('botao')*/