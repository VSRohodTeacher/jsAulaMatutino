var vingadores = ["Titulo: Vingadores","Descricao: lorem"];
var filmes = [vingadores,"Frozen","Frozen","Frozen","Shrek","GodZilla","Senhor dos anéis","Harry Potter"];

// for(var contador = 0; contador < filmes.length; contador++){
//     console.log(filmes[contador]);
// }

filmes.forEach( (cadaFilme) => {
    console.log(cadaFilme);
});