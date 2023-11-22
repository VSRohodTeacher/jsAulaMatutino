// CASE
// escolha variavel
//     caso isso 
//         isso
//         fimcaso
//     caso...
// fimEscolha

var numero1 = Number(prompt("Digite o primeiro número"));
var operador = prompt("Digite o operador");
var numero2 = Number(prompt("Digite o seu segundo numero"))

switch(operador){
    case "+":
        var resultado = numero1 + numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo?");
        if(novoCalculo == true){
            location.reload();
        }
        break;
    case "-":
        var resultado = numero1 - numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo?");
        if(novoCalculo == true){
            location.reload();
        }
        break;
    case "*":
        var resultado = numero1 * numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo?");
        if(novoCalculo == true){
            location.reload();
        }
        break;
    case "/":
        var resultado = numero1 / numero2;
        alert(`O resultado da operação é ${resultado}`);
        var novoCalculo = confirm("Deseja fazer um novo calculo?");
        if(novoCalculo == true){
            location.reload();
        }
        break;
    default:
        alert("Operador inválido! tente novamente!");
        location.reload();
        break;
}

