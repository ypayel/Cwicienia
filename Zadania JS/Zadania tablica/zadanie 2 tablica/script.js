"use strict"; 

const tab = [];


for( let i = 0; i <10; i++){
    const liczba = Number(prompt("Podaj liczbe"))
    tab.push(liczba);
}

for(let i = tab.length - 1; i >= 0; i--){
    console.log(tab[i]);
}
