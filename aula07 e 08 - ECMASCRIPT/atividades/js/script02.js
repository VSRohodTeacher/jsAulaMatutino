const btnTrocar = document.querySelector("#btnTrocar");
const btnTrocarTodos = document.querySelector("#btnTrocarTodos");

btnTrocar.addEventListener("click", trocarUmTermo);
btnTrocarTodos.addEventListener("click", trocarTodosTermos);

function trocarUmTermo(){
    let blocoDeTexto = document.querySelector("#blocoDeTexto");
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicionarTermo").value;

    let blocoDeTextoFormatado = blocoDeTexto.value.replace(removerTermo,adicionarTermo);
    
    blocoDeTexto.value = blocoDeTextoFormatado;
}

function trocarTodosTermos(){
    let blocoDeTexto = document.querySelector("#blocoDeTexto");
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicionarTermo").value;

    let blocoDeTextoFormatado = blocoDeTexto.value.replaceAll(removerTermo,adicionarTermo);
    
    blocoDeTexto.value = blocoDeTextoFormatado;
}