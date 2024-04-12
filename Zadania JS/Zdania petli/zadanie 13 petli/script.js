let magicznaLiczba = 0;
let summa = 0;

while (true){
let liczbaA = Number(prompt("Podaj liczbe"));
summa = summa + liczbaA;
    if(liczbaA === magicznaLiczba){
    console.log(summa);
    break;
    }
}