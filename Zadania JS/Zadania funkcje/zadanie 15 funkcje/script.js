
function poleKwadrata(a){
    return a * a;
}

function poleProstokata(a, b){
    return a * b;
}

function poleKola(r){
    return Math.PI * r * r;
}

function pobierzOpcje(){
    console.log("1.Pole kwadratu");
    console.log("2.Pole prostokata");
    console.log("3.Pole kola");

    return Number(prompt("Wybierz opcje"));
}

function run(){
    const opcja = pobierzOpcje();

    if(opcja === 1){
        const a = Number(prompt("Podaj liczbe"));
        console.log(poleKwadrata(a));
    } else if (opcja === 2){
        const a = Number(prompt("Podaj liczbe"));
        const b = Number(prompt("Podaj liczbe"));
        console.log(poleProstokata(a,b));
    } else if(opcja === 3){
        const r = Number(prompt("Podaj liczbe"));
        console.log(poleKola(r));
    }
}

run();





