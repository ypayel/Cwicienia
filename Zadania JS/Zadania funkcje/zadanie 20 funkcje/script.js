
function randomNumber(min, max){
    let losowaLiczba = Math.random() * (max - min) + min;
    return losowaLiczba;
}


function randomAnimal(){
    const zwierze = ["lama", "kot", "leniwiec", "lemur"];
    const indeks = randomNumber(0, zwierze.length -1);
    return zwierze[indeks];
}


const imie = prompt("Podaj imie");

console.log(`Czesc ${imie} twoje ulubione zwierze to: ${randomAnimal()}`);
