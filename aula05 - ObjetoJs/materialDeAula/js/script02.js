class Aluno {
    constructor(valorNome,valorIdade,valorTurma){
        this.nome = valorNome;
        this.idade = valorIdade;
        this.turma = valorTurma;        
    }
}

class Qualificacao {
    constructor(valorNome,valorDuracao, valorTipo){
        this.nome = valorNome;
        this.duracao = valorDuracao;
        this.tipo = valorTipo;        
    }
}

var curso1 = new Qualificacao("FRONT",220,"Tecnologia");
var curso2 = new Qualificacao("Java",400,"Tecnologia");
var curso3 = new Qualificacao("Culinária",100,"Alimentação");

var aluno1 = new Aluno("Leandro", 25, curso1);
var aluno2 = new Aluno("Alice", 20, curso2);

// atributo privativo = apenas o objeto em si poderá mudar seus valores,não aceitando uma reatribuição fora de seu objeto