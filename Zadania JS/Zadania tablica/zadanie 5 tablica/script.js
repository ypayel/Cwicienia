"use strict"; 

const tab = [];

for(let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe"));
    tab.push(liczba);
}

let duplikaty = false;
for (let i = 0; i < 10; i++){
    for( let j = i + 1; j < 10; i++){
        if(tab[i] === tab[j]){
            duplikaty = true;
            console.log("Podales duplikaty");
            break;
    }
    
    }
}
