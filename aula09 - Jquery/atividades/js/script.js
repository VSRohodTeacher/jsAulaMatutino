$("#btnCalcular").on("click", function(){
    let numeroEscolhido = Number($("#numeroEscolhido").val());
    for(let i = 1; i <= 10; i++){
        document.querySelector("#resultadoCalculo").innerHTML += `${i} x ${numeroEscolhido} = ${i * numeroEscolhido} <br>`;
    }
});