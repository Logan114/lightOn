window.addEventListener("load", function () {
    //NegyzetGeneralas();
    TombLetrhoz();
    Kattintas();
   
});







function TombLetrhoz(){
    const Tomb = [];
    for(let i = 0; i < 25; i++){
        Tomb[i] = i;
    }
}


const NEGYZET = $("kocka"); 


function Kattintas(){
    for (let i = 0; i < Negyzet.length; i++) {
        Negyzet[i].on
        eq(0);
            if (Negyzet[i].textContent.){
                //classAdd
            } else if(jatekos === 0){

            } else {

            }
            console.log("jatekos, lepesek: " + jatekos + "   " + lepesek);
            //if(JatekVege()){};
        });
      }
}



//function JatekVege(){}
function negyzetgeneralas(){
    const mezo = $(".palya")

    for (let i=0; i<25; i++){
        $(mezo).append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
        
    }
}
negyzetgeneralas();
