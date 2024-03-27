$("load", function () {
    negyzetGeneralas();
    tombLetrhoz();
    kattintas();
   
});






function negyzetGeneralas(){
    const mezo = $("#palya")

    for (let i=0; i<25; i++){
        mezo.append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
        
    }
}





function tombLetrhoz(){
    const Tomb = [];
    for(let i = 0; i < 25; i++){
        Tomb[i] = i;
    }
}



const NEGYZET = $("kocka"); 

function szinValtas(elem){
    $(elem).css("background","green")
}



function Kattintas(){
    NEGYZET.on("click", function(){
        $(NEGYZET.eq()).addClass("negyzet");

        
        //if(JatekVege()){};
    });
}



function negyzetgeneralas(){
    const Mezo = $("#palya")

    for (let i=0; i<25; i++){
        $(Mezo).append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
        
    }
}
negyzetgeneralas()
