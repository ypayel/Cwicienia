const tab =  [6, 5, 4, 5, 10, 5, 8, 3, 10, 6, 6, 6, 4, 3, 2, 8, 1, 3, 4, 7];



const liczby = [];
const IleLiczb = [];

for(let i = 0; i < tab.length; i++){
    let indeksLiczby = liczby.indexOf(tab[i]);
    if(indeksLiczby === -1){
        liczby.push(tab[i]);
        IleLiczb.push(1);
    }else {
        IleLiczb[indeksLiczby]++;
    }
}

console.log(liczby);
console.log(IleLiczb);