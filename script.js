// 1. Ouvir o evento de quando o usuario sair do campo de CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    // 2. Validar o CEP
    if(!(cepInformado.length === 8)){
        return;
    }



})