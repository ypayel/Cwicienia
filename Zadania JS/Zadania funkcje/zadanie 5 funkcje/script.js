function tablica (zmienna){
    const tab = [];
    for( let i = 0; i < zmienna; i++){
        const liczba = Number(prompt("Podaj liczbe"));
        tab.push(liczba);
    }
        return tab;
}
let wynik = tablica(2)
console.log(wynik);