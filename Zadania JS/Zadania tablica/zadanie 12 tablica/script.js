"use strict"; 

const tab = [];
let random = 0;
for(let i = 0; i < 10; i++){
    const slowko = prompt("Podaj slowo")
    tab.push(slowko);
}
for(let i = 0; i < 10; i++){
    random = Math.floor(Math.random() * tab[i].length);
    console.log(tab[i][random]);
}
