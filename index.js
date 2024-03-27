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

/*
function Kattintas(){
        NEGYZET.on("click", function(){
            if (){
                //classAdd
            }  else {

            }
            //if(JatekVege()){};
        });
}
*/


//function JatekVege(){}

