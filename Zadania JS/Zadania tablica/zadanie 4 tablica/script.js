"use strict"; 

const tab = [];

for( let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"));
tab.push(liczba);
console.log(tab);
}
let suma = 0;
for(let i = 0; i < tab.length; i++){
    suma = suma + tab[i];
}
console.log(suma);