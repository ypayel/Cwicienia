"use strict"; 

const tab = [];

for(let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"));
    tab.push(liczba);
      
}


let max = 9999999;
for (let i = 0;  i < tab.length; i++){
    if(tab[i] > max){
        max = tab[i];
    }

}

console.log(max)