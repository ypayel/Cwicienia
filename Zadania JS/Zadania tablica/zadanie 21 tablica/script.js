const slowko = prompt("Podaj slowko");

let czyPalidrom = true;


for(let i = 0; i < slowko.length; i++){
    if(slowko[i] !== slowko[slowko.length - 1 - i]){
    czyPalidrom = false; 
    break;
    }
}
if(czyPalidrom === true){
    console.log("Jest palindromem");
} else {
    console.log("Nie jest palindromem");
}