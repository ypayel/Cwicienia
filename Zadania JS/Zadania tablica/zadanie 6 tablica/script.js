"use strict"; 

const tab = [];

for( let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"));
    tab.push(liczba);
}

const liczbyJuzPoliczone = []

for(let i = 0; i < 10; i++){
    if (liczbyJuzPoliczone.indexOf(tab[i]) !== -1){
        continue;
    }
    let sumaDanejliczby = 1;
    for(let j = 0; j < 10; j++){
        if(tab[i] === tab[j]){
            sumaDanejliczby++;
        }
    }
    console.log(tab[i]);
    console.log(sumaDanejliczby);
    liczbyJuzPoliczone.push(tab[i]);
}
     


 


