var duracao = 60000;

$("#btnPlay").on("click", function(){
    $(".progress-bar").animate({width : "100%"},{duration: duracao})
})