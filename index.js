function negyzetgeneralas(){
    const mezo = $(".palya")

    for (let i=0; i<25; i++){
        $(mezo).append(`<div class="kocka${i} kocka"><p>${i}</p><br></div>`);
        
    }
}
negyzetgeneralas();