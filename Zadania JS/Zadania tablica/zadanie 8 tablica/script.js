"use strict"; 

const tab = [];
let liczbaMax = 1;

for(let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"));
    tab.push(liczba);
    if ( liczbaMax <= tab[i]){
        liczbaMax = tab[i];
        
    }
}

let drugiMax = 1;
for(let i = 0; i < liczbaMax.length; i++){
   if(drugiMax < tab[i] && tab[i] == liczbaMax){
    drugiMax = tab[i];
    
   }
}
console.log(drugiMax);