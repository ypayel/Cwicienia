"use strict"; 

const tab = [];
let liczbaMax = Number.MIN_SAFE_INTEGER;
let liczbaMin = Number.MAX_SAFE_INTEGER;
let suma = 0;

for(let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"))
    tab.push(liczba)
     
}
for(let i = 0; i < tab.length; i++){
    if(liczbaMax < tab[i]){
        liczbaMax = tab[i];

    }if (liczbaMin > tab[i]){
        liczbaMin = tab[i];
}
    suma = suma + tab[i];
}


console.log(liczbaMax - liczbaMin);
console.log(suma / tab.length);
console.log(suma);