//Selecionando os elementos HTML:
var cepInput = document.getElementById("cep_input");
var botao = document.getElementById("button");


//Adicionando um ouvinte de evento (event listener)
botao.addEventListener("click", buscar)



function buscar() {
    var cep = cepInput.value;
    var link = "https://viacep.com.br/ws/" + cep + "/json/"

    fetch(link) // é usado para fazer uma requisição HTTP para o URL especificado.
        .then(response => response.json()) // é uma promessa que converte a resposta em JSON.
        .then(data => mostrarDados(data)) //chama a função mostrarDados com os dados JSON obtidos.
        .catch(error => console.error('Erro ao buscar o CEP:', error))
}

function mostrarDados(data) {

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    resultado.innerHTML = "<h2> INFORMAÇÕES SOBRE O CEP </h2>"

    for (var propriedade in data) {
        resultado.innerHTML += "<p>" + "<strong>" + propriedade + ":</strong> " + data[propriedade] + "<br>" + "</p>";
    }
}








