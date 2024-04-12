function sumuj (tab) {
    let suma = 0;
    for (let i = 0; i < tab.length; i++){
        suma = suma + tab[i];
    }
    return suma;
    
}

const wynik = sumuj([1,6,4,6,1,2,7])
console.log(wynik);

   
