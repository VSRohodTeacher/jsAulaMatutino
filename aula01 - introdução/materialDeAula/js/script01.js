// CAIXAS DE TEXTO
// alert("Olá mundo");
// confirm("Bom dia, o dia está bom?");
// prompt("Qual é a sua idade?");

// CONSOLE LOG
console.log("Olha que legal!");

//VARIAVEIS 
// let "temporária", é sobrescrevivel. Escopo local 
function letTeste(){
    let numero = 0;
    numero = 1;
    console.log(numero);
}

// var variavel, é sobrescrevivel. Escopo global
var nome = "Victor";

//const constante, não sobrescrevivel. Escopo global
const pi = 3.14;

//CONCATENAÇÃO 
const name = prompt("Qual é o seu nome?");
alert("Seja bem vindo(a), " + name);
// comando abaixo utiliza crase
// ${} desconsidera elemento como texto ou string!
alert(`${name}, aproveite a estadia!`);

// TIPOS DE VALORES
// STRING
var texto = "Olá mundo";
// NUMBER
var numeroBacana = 10;
// BOOLEAN
var ligado = true;
// OBJETO
var carro = [ atributo = "algo"];