//PROMISSES
const primeiroPromise = new Promise((resolve, reject) => {
    var nome = "Victor";

    if(nome == "Victor"){
        resolve("O usuário é o Victor! Seja bem vindo!");
    }else {
        reject("O usuário não é o Victor! Acesso negado!");
    }
});  

//RESOLVE - CUMPRIR A PROMESSA (DEU CERTO)  
//REJECT - NÃO CUMPRIU A PROMESSA (DEU ERRADO)  
//THEN - RODA A PROMESSA
//CATCH - RODA APENAS SE TIVER UM ERRO! 

primeiroPromise.then((data) => {
    console.log(data);
})

//objectEntries 
const cursos = {
    FrontEnd : 60 ,
    BancoDeDados: 40 ,
    CyberSecurity: 100,
    Python: 80
}

// KEYS DEVOLVE O NOME DO ATRIBUTO
// const cursosKey = Object.keys(cursos);
// var pesquisa = prompt("Insira curso");
// var processo = cursosKey.indexOf(pesquisa);
// if( processo == -1){
//     alert("Deu ruim, não encontrei, quer adicionar?");
//     var novo = confirm();
//     if(novo == true){
//         cursosKey.push(pesquisa);  
//         alert("Adicionado")      
//     }else{
//         alert("Tudo bem!")
//     }
// }else{
//     alert(`Deu bom, o curso é o ${processo} da nossa lista`);
// }

//ENTRIES DEVOLVE TANTO NOME DO ATRIBUTO E SEU VALOR
const cursosEntries = Object.entries(cursos);
console.log(cursosEntries);

console.log(cursos)


var resposta = document.querySelector("#resposta");
cursosArray = ["FrontEnd", "BancoDeDados","Python"];
var cursosMap = cursosArray.map((cadaElemento) => "<li>Curso :"+cadaElemento+"</li>");

resposta.innerHTML = `O map faz um processo para cada elemento do nosso array! Olha só: <ul>${cursosMap}</ul>`

//PADSTART/PADEND
const nome = "Victor";
const sobreNome = "Rohod";
const cartao = "2934";
//padstart concatena no começo do elemento
var nomeCompleto = sobreNome.padStart(11,nome);
console.log(nomeCompleto);
//padend concatena no fim do elemento
var nomeCompleto2 = sobreNome.padEnd(11,nome);
console.log(nomeCompleto2);
var cartaoBanco = cartao.padStart(16,"*")
console.log(cartaoBanco);
