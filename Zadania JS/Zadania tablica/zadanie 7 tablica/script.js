"use strict"; 

const tab= [];

for(let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"));
    tab.push(liczba);
}

const parzyste = [];
const nieparzytse = [];

for(let i = 0; i < 10; i++){
    if(tab[i] % 2 === 0){
    parzyste.push(tab[i]);
}else {
    nieparzytse.push(tab[i]);
}
} 
console.log(parzyste);
console.log(nieparzytse);

