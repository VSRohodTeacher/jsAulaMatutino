// REPLACE / REPLACEALL
var frase = "Olá mundo, o mundo é muito legal";
console.log(frase);

console.log(frase.replace("mundo","bacana"));
console.log(frase.replaceAll("mundo","bacana"));

// SETATTRIBUTE
document.querySelector("span").setAttribute("style","color: blue ;");

//CLASS LIST
document.querySelector("#classlist").classList.remove("claro");
document.querySelector("#classlist").classList.add("claro");
var elemento = document.querySelector("#classlist");
// contains se contem a classe
// toggle troca de classe
if(elemento.classList.contains("claro")){
    // elemento.classList.toggle("escuro");
    elemento.classList.replace("claro","escuro");
}

//index of / includes
var frutas = ['Morango','Banana','Laranja','Uva']

// includes -> true e false
console.log(frutas.includes("Abacaxi"));
// indexOf -> o valor indice do array (caso não exista, -1)
console.log(frutas.indexOf("Abacaxi"));

if(frutas.includes("Abacaxi" == false)){
    console.log("Não achei")
}

//SET TIMEOUT
function msg(){
    //PROMISE - SE ASSEMELHA A UMA FUNÇÃO, PORÉM ELE CONFIGURA SUCESSO E ERRO
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Bom dia!");
            resolve()
        }, 5000);
        
    })
}

async function carregando(){
    console.log("iniciou");
    await msg();
    console.log("Seja bem vindo");
}

carregando();


