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
    const modifikalt_elem =$(elem)
    modifikalt_elem.css("background", "green")
}

/*
function Kattintas(){
        NEGYZET.on("click", function(){
            if (){
                //classAdd
            }  else {

            }
            //if(JatekVege()){};
        };
      }
}

*/

//function JatekVege(){}
function negyzetgeneralas(){
    const Mezo = $("#palya")

    for (let i=0; i<25; i++){
        $(Mezo).append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
        
    }
}
negyzetgeneralas()

szinValtas(".kocka2")