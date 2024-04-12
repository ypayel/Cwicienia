const numberA = Number(prompt("Podaj liczbe"));

if  (numberA <= 1){
    console.log("Przerywam prace");
}
 else {
let czyJestPierwsza = true;
for( let i = 2; i < numberA; i++){
    if(numberA % i === 0){
    czyJestPierwsza = false;
    break;
}
}
if(czyJestPierwsza === true){
    console.log("Jest pierwsza");
} else {
    console.log("Nie jest pierwsza");
}
}




