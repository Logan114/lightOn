




// Pálya létrehozása

export function negyzetGeneralas(){
    
    const mezo = $("#palya")
    for (let i=0; i<25; i++){
        mezo.append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
       
    }
}








// Pálya életre keltése

export function kattintas() {
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

// Szomszédos négyzetek színváltásához

function szomszedotSzinez(index) {
    $(".kocka").eq(index).toggleClass("kockaValtozott");
}






// Játék újrakezdése

export function ujKor() {
    const kezelesDiv = $(".kezeles");
    kezelesDiv.html(`<button class="ujKor">Új kör</button>`);

    $(".ujKor").on("click", function() { 
        $(".kocka").removeClass("kockaValtozott");
    });
}




// Pálya méretének megadása

export function hanyszorHany() {
    const kezelesDiv = $(".kezeles");
    kezelesDiv.append(`<button class="hanyszorHany">Méretállítás</button>`);

    $(".hanyszorHany").on("click", function() { 
        // méret átállítás
    });
}



export function kattintasSzamlalo(){
    let klikk = 0;
    const szamlalo = $(".szamlalo")
    $(".kocka").on("click", function(){
        
        klikk +=1
        szamlalo.html(`<p>Kattintások száma:${klikk}</p>`)
        console.log(klikk)

    });
}

/* ------------------------  Megjegyzések  ------------------------*/

// randomizáció kezdéskor
// n*n-s legyen
// oldalt ne színeződjön be
// dokumentaciot irni, online van egy pelda (mindenkinek kell egy sajátot írnia)


// lepesSzamlalo
// stopper játékmérése
// uj jateknel mindig negyzet-színvaltas
// legyen reszponziv
// legyen valid

