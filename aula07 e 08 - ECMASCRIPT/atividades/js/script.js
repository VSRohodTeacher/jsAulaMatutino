const verificarPromise = new Promise((resolve, reject) => {
    let nome = "ADM";
    let senha = "ADM";

    if(nome == "ADM" && senha == "ADM"){
        resolve("Seja bem vindo administrador!");
    }else{
        reject("O usuário não é ADM! Faça o login de maneira alternativa!");
    }
});

verificarPromise.then(() => {
    alert("Usuário encontrado! Seja bem vindo administrador");
})

verificarPromise.catch(() => {
    alert("Erro! Usuário não cadastrado!");
})