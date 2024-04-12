
function randomNumber(min, max){
    let losowaLiczba = Math.random() * (max - min) + min;
    return losowaLiczba;
}
const imie = prompt("Podaj imie");

console.log(`Czesc ${imie} twoja losowa liczba to: ${randomNumber(10,50)}`);
