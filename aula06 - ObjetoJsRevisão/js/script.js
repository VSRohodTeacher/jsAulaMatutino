class Filme {
    constructor(valNome,valDescricao,valData,valDiretor,valCategoria){
        this.nome = valNome;
        this.descricao = valDescricao;
        this.data = valData;
        this.diretor = valDiretor;
        this.categoria = valCategoria;
    }
}

//SELETORES
const btnCadastrar = document.querySelector("#cadastroFilmesBtn");
const btnListar = document.querySelector("#listarFilmesBtn");
var filmes = []

btnCadastrar.addEventListener("click", cadastrar);
btnListar.addEventListener("click", listar);

function cadastrar(){
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;

    filmes.push(new Filme(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme));
}

function listar(){
    let divResposta = document.querySelector("#resposta");

    divResposta.innerHTML = ""

    filmes.forEach((elemento) => {
        divResposta.innerHTML += `<div class="filme">
        <h2>${elemento.nome}</h2>
        <p>Descrição do filme : ${elemento.descricao}</p>
        <p>Data de lançamento : ${elemento.data}</p>
        <p>Diretor do filme: ${elemento.diretor}</p>
        <p>Categoria do filme : ${elemento.categoria}</p>
        </div>
        `;
    });
    

}
