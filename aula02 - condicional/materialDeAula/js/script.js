//OPERADORES LOGICOS (COMPARAR)
// > MAIOR QUE
// < MENOR QUE
// != DIFERENTE (<>)
// == IGUAL (= RECEBE, == COMPARA VALOR, === COMPARA VALOR E TIPO )
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL

// OPERADORES ALTERNÁRIOS
// && E (DUAS CONDIÇÕES DEVERÃO SER IGUAIS EM RESULTADO)
// || OU (SE UMA DAS CONDIÇÕES FOR VERDADEIRA SERÁ EXECUTADO)
// ! NÃO (SE NÃO FOR A CONDIÇÃO)

//CONDICIONAIS 
// IF (SE SENAO)
if(true){
    console.log("Sou verdadeiro");
}else{
    console.log("Sou falso");
}

// verificar idade 
var idade = Number(prompt("Qual é a sua idade?"));

if(idade >= 18){
    alert("Seja bem vindo!");
}else{
    if(idade == 0){
        alert("Idade invalida, tente novamente!");
        location.reload();
    }else{
        alert("Você não tem autorização para entrar nesse site!");
        location.href = "https://www.google.com.br/?hl=pt-BR";
    }
   
    // location.reload();
}

// condição ? bloco1 : bloco2 if ternario
// x > 10 ? alert("legal") : ("maneiro")


// if (x > 0 && x < 10){
// if (x > 0 || x < 10){
// if (x != 10){
//     alert("Sou maior que zero e menor que 10")
// }else{
//     alert("Sou menor que zero ou maior que 10")
// }
