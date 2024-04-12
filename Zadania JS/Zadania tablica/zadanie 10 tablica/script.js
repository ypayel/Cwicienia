const tab = []

for(let i = 0; i < 10; i++){
    const liczba = Number(prompt("Podaj liczbe "));
    tab.push(liczba);
}

const liczbaDoZnalezienia = Number(prompt("Jaka liczbe szukasz?"))
let indeksLiczby = 1;

for(let i = 0; i < 10; i++){
    tab[i] === liczbaDoZnalezienia;
    indeksLiczby = i;
}

if(indeksLiczby === -1){
    console.log("Nie zostala znaleziona")
} else {
    console.log(indeksLiczby);
}