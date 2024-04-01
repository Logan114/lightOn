$("load", function () {
    negyzetGeneralas();
    kattintas();
    ujKor();
});






function negyzetGeneralas(){
    const mezo = $("#palya")

    for (let i=0; i<25; i++){
        mezo.append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
    }
}










function kattintas() {
    $(".kocka").on("click", function() {
        $(this).toggleClass("kockaValtozott");
        
        let index = $(this).index();


        let sor = Math.floor(index / 5);
        let oszlop = index % 5;

        
        let felsoIndex = (sor - 1) * 5 + oszlop;
        let alsoIndex = (sor + 1) * 5 + oszlop;
        let balIndex = sor * 5 + oszlop - 1;
        let jobbIndex = sor * 5 + oszlop + 1;

 
        szomszedotSzinez(felsoIndex);
        szomszedotSzinez(alsoIndex);
        szomszedotSzinez(balIndex);
        szomszedotSzinez(jobbIndex);
    });
}



function szomszedotSzinez(index) {
    if (index >= 0 && index < 25) {
        $(".kocka").eq(index).toggleClass("kockaValtozott");
    }
}








function ujKor() {
    const kezelesDiv = $(".kezeles");
    kezelesDiv.html(`<button class="ujKor">Új kör</button>`);
    $(".ujKor").on("click", function() {
        $(".kocka").removeClass("kockaValtozott");
    });
}




// lepesSzamlalo
// stopper játékmérése
// uj jateknel mindig negyzet-színvaltas
// legyen reszponziv
// legyen valid

