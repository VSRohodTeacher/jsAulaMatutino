var caixa = $("#caixa");

$("#animacao1").on('click', function(){
    caixa.animate({width: "500px", height: "500px", borderRadius: "100%"})
});

$("#animacao2").on('click', function(){
    caixa.animate({width: "300px", height: "300px", borderRadius: "0%"}).animate({marginLeft : "200px"})
})

$("#animacao3").on('click', function(){
    caixa.animate({marginTop : "300px", marginRight : "100px", rotate : "360deg"},{duration : 1000, complete : () => {alert("Se o cao tiver deprecao, animacao")}});
})

$("#animacao4").on('click', function(){
    caixa.animate({margin: "0px", rotate : "-360deg" });
})

$("#animacao5").on('click', function(){
    // caixa.fadeOut(1000);
    caixa.slideUp(1000);
    // caixa.hide(1000);
})

$("#animacao6").on('click', function(){
    // caixa.fadeIn(1000);
    caixa.slideDown(1000);
    // caixa.show(1000);
})

$("#animacao7").on('click', function(){
    caixa.fadeToggle(1000);
    // caixa.slideToggle(1000);
})

$("#animacao8").on('click', function(){
    caixa.css("transition","1s");
    caixa.css("backgroundColor","red");
    $("#teste").attr("placeholder","Isso é um input bacana");
    $("#teste").attr("class","bacana");
    $("img").attr("src","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*")
    $("img").attr("width","500px");
})



