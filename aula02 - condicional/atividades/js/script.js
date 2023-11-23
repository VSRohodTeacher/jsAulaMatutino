var idade = Number(prompt("Qual é a sua idade"));

//IF
// if(idade <= 0){
//     alert("Idade inválida, tente novamente!");
//     location.reload();
// }

// if(idade > 0 && idade < 15){
//     alert("Criança");
//     location.reload();
// }

// if(idade >= 15 && idade < 30){
//     alert("Jovem");
//     location.reload();
// }

// if(idade >= 30 && idade < 60){
//     alert("Adulto");
//     location.reload();
// }

// if(idade >= 60){
//     alert("Idoso");
//     location.reload();
// }

// if else
if(idade <= 0){
    alert("Idade inválida, tente novamente!");
    location.reload();
} else {
    if(idade > 0 && idade < 15){
        alert("Criança");
        location.reload();
    } else {
        if(idade >= 15 && idade < 30){
            alert("Jovem");
            location.reload();
        } else {
            if(idade >= 30 && idade < 60){
                alert("Adulto");
                location.reload();
            } else {
                alert("Idoso");
                location.reload();
            }
        }
    }   
}

// if
// else if
// else if
// else if
// else if
// else if
// else