// REPETIÇÕES
//WHILE (VERIFICA E DEPOIS FAZ)

//enquanto (condicao) faca

// contador + 1
//fimEnquanto
var contador = 20;

while (contador <= 10) {
    console.log(contador);
    contador++
    // contador = contador + 1;
}

// DO WHILE (FAZ E VERIFICA)
// REPITA
//
// CONTADOR
// ATE(CONDICAO)

var cont = 20
do{
 console.log(`FIZ ${cont} VEZES`);
 cont++;
}
while( cont <= 10);

// FOR  
// PARA (VAR,CONDICAO,CONTROLADOR)

//FIMPARA
for(let controlador = 1; controlador <= 10; controlador++ ){
    console.log(controlador+" - For é legal");
}

//FOR EACH
console.log("ELEMENTOS");
var elementos = ["ELEMENTO1","ELEMENTO2","ELEMENTO3","ELEMENTO4","ELEMENTO5","ELEMENTO6","ELEMENT"]; 

// function pseudofunction , anonima
elementos.forEach((cadaElemento) => {
    console.log(" - "+cadaElemento);
});

