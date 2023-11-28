class Carro {
    constructor(marca, modelo, ano , cor , velocidadeMax){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
    }
    acelerar(velocidadeAcelerada){
        if(velocidadeAcelerada <= 0){
            return "Velocidade não permitida! Coloque uma aceleração acima de 0";
        }else{
            if(velocidadeAcelerada + this.velocidadeAtual > this.velocidadeMax){
                return "Velocidade não permitida! Velocidade maxima ultrapassada!";
            }else{
                this.velocidadeAtual += velocidadeAcelerada;
                return "Você acelerou "+velocidadeAcelerada;
            }
        }
    }
}

var btnCarro = document.querySelector("#btnCarro");

btnCarro.addEventListener('click', criarCarro);

function criarCarro(){
    let marcaInput = document.querySelector("#marca").value;
    let modeloInput = document.querySelector("#modelo").value;
    let dataInput = document.querySelector("#data").value;
    let corInput = document.querySelector("#cor").value;
    let velocidadeMaxInput = document.querySelector("#velocidadeMax").value;
    let resposta = document.querySelector("#resposta");

    var carro = new Carro(marcaInput,modeloInput,dataInput,corInput,velocidadeMaxInput);

    resposta.innerHTML = `<div class="post">
    <h3>${carro.modelo}</h3>
    <p>Marca : ${carro.marca}</p>
    <p>Data : ${carro.ano}</p>
    <p>Cor do carro : <span style="color:${carro.cor}">COR</span></p>
    <p>Velocidade Max : ${carro.velocidadeMax}</p>
    </div>`;
}
