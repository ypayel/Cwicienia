"use strict";
let suma = 0;
while(true) {
const karta = Math.floor(Math.random()* (10 -2)+ 2);
console.log(karta);
suma = karta + suma;


if(suma > 21){
    console.log("Przegrales");
    break;
}
if (suma === 21){
    console.log("Wygrales");
    break;
}
 
const opcja = prompt("Wybierz D lub P");
console.log(suma);
if (opcja === "P"){
    break;
}
 else if (opcja !== "D"){
    console.log("Gram dalej")
}
}







