//pegar input
var input = document.querySelector("#inputText");
// add evento foco e perder foco
input.addEventListener("focus", mudaCor);
input.addEventListener("blur", mudaCorVerifica);
// fazer o input ficar amarelo quando selecionado
function mudaCor() {
    let mensagem = document.querySelector("#mensagem");
    input.style.backgroundColor = "yellow";
    mensagem.innerHTML = "Digite uma senha com mais de 3 digitos!";
}
function mudaCorVerifica() {
    let inputValor = input.value.length;
    let mensagem = document.querySelector("#mensagem");
    if ( inputValor < 3){
        input.style.backgroundColor = "red";
        mensagem.innerHTML = "Digite uma senha válida!";
    }else {
        input.style.backgroundColor = "green";
        mensagem.innerHTML = "Senha atinge os requisitos!";
    }
}
// pegar a quantidade de caracteres
// verificar se tem 3 ou mais para verde
// verfificar se menos que 3 para vermelho