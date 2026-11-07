// 1. Ouvir o evento de quando o usuario sair do campo de CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    // 2. Validar o CEP
    if(!(cepInformado.length === 8)){
        return;
    }

    // 3. Fazer busca no ViaCEP
    // Promessa de que o fetch vai buscar esse recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data => {
        // 3.2 Processamento da página
        if(!data.erro){
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        }else {
            alert("CEP nao encontrado.")
        }

    })
    .catch(error => console.error("Erro ao buscar o CEP:", error));


})