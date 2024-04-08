
let elkezdodott = false;



// Pálya létrehozása

export function negyzetGeneralas() {
  const mezo = document.getElementById("palya");
  let txt = "";
  for (let i = 0; i < Math.pow(meretSzam, 2); i++) {
    txt += `<div class="kocka${i} kocka"><br></div>`;
  }
  mezo.innerHTML = txt;
}

// Pálya életre keltése

export function kattintas() {
  $("#palya").on("click", ".kocka", function () {
    $(this).toggleClass("kockaValtozott");
    let index = $(this).index();
    let sor = Math.floor(index / meretSzam);
    let oszlop = index % meretSzam;

    let felsoIndex = (sor - 1) * meretSzam + oszlop;
    let alsoIndex = (sor + 1) * meretSzam + oszlop;
    let balIndex = sor * meretSzam + oszlop - 1;
    let jobbIndex = sor * meretSzam + oszlop + 1;


    if (sor > 0) szomszedotSzinez(felsoIndex);  // Ez a sor azt ellenőrzi, hogy az aktuális négyzet nincs-e a rács felső sorában. Ha a sor (a sor indexe) nagyobb, mint 0, az azt jelenti, hogy az aktuális négyzetnek van felette szomszédja. Ebben az esetben meghívja a szomszedotSzinez függvényt a fenti négyzet színének váltásához (felsoIndex).
    if (sor < meretSzam - 1) szomszedotSzinez(alsoIndex);
    if (oszlop > 0) szomszedotSzinez(balIndex);
    if (oszlop < meretSzam - 1) szomszedotSzinez(jobbIndex);
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

  kezelesDiv.on("click", ".ujKor", function () {   //a .kezeles HTML-tartalmát a függvény minden egyes meghívásakor egy új gombra cseréli. Ez a megközelítés eltávolítja az előző gombhoz csatolt eseménykezelőket.
    $(".kocka").removeClass("kockaValtozott");
    eltelt = 0;
    klikk = 0;
    const szamlalo = $(".szamlalo");
    szamlalo.html(`<p>Kattintások száma: 0</p>`);
  });
}






// Pálya méretének megadása

let meretSzam = 3;

export function hanyszorHany() {
  let grid = "";
  const kezelesDiv = $(".kezeles");
  kezelesDiv.append(`<button class="hanyszorHany">Méretállítás</button>`);

  $(".hanyszorHany").on("click", function () {
    meretSzam = meretSzam === 3 ? 5 : 3; // ha 3 akkor 5 lesz, ha 3 akkor 5 lesz


    const palya = document.querySelector('#palya');
    palya.innerHTML = ''; // Azért töröljük mert már új a meretSzam-unk és mást kell legenerálnia, új változó értékkel
    negyzetGeneralas();
    grid = ""; // Alaphelyzetbe állítása
    for (let i = 0; i < meretSzam; i++) {
      grid += '1fr ';
    }
    palya.style.gridTemplateColumns = grid;


    const kockaElements = document.querySelectorAll('.kocka');
    kockaElements.forEach((kocka) => {
      kocka.style.width = '100%';
      kocka.style.height = '7em';
    });
    
    //kezelesDiv.style.gap = '3px'; még nem mükszik

    randomizacio();
  });
}






// Lépészszámláló
let klikk = 0;
export function kattintasSzamlalo() {
  const szamlalo = $(".szamlalo");
  $("#palya").on("click", ".kocka", function () { // A későbbi méretváltoztatások miatt szükséges
    klikk += 1;
    elkezdodott = true;
    szamlalo.html(`<p>Kattintások száma: ${klikk}</p>`);
  });
}

// Stopper
let eltelt = 0;
let elteltPerc = 0;

export function stopperSzamolas() {
  setInterval(function () {
    if (elkezdodott) {
      eltelt += 1;
      stopperKiiras();
      if (eltelt == 60) {
        elteltPerc += 1;
        eltelt = 0;66
      }
    }
  }, 1000); /*másodpercenként hozzáad az eltelthez 1-et */
}

let stopperSzoveg;

function stopperKiiras() {
  const stopperHtml = $(".stopper");
  if (elteltPerc > 0) {
    stopperSzoveg = `<p>${elteltPerc} perc és ${eltelt} másodperc telt el</p>`;
  } else {
    stopperSzoveg = `<p>${eltelt} másodperc telt el</p>`;
  }
  stopperHtml.html(stopperSzoveg);
}
export function stopperMeghivas() {
  stopperSzamolas();
}









export function randomizacio() {
  const randSor = Math.floor(Math.random() * meretSzam);
  const randOszlop = Math.floor(Math.random() * meretSzam);

  
  const randIndex = randSor * meretSzam + randOszlop;
  const randNegyzet = document.querySelector(`.kocka${randIndex}`);

  if (randNegyzet) {
    randNegyzet.click();
  }
  
}



/* ------------------------  Megjegyzések  ------------------------*/

// randomizáció kezdéskor
// n*n-s legyen --kész--
// oldalt ne színeződjön be --kész--
// dokumentaciot irni, online van egy pelda (mindenkinek kell egy sajátot írnia)

// lepesSzamlalo --kész--
// stopper játékmérése --kész--
// uj jateknel mindig negyzet-színvaltas
// legyen reszponziv
// legyen valid
