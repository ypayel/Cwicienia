const tab = [[],[],[],[],[]];

for(let i = 0; i < tab.length; i++){
    for(let j = 0; j < 5; j++){
        tab[i][j] = Number(prompt("Podaj liczbe"));
    }
}
console.log(tab);