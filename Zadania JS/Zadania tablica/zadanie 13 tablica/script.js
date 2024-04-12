"use strict"; 


const historia = [];

while(true) {
        const liczba1 = Number(prompt("Podaj liczbe pierwsza"));
        const liczba2 = Number(prompt("Podaj liczbe druga"));
        const wybor = Number(prompt("Wybiez dzialanie"));
    if(wybor === 1){
        console.log(liczba1 + liczba2);
        historia.push("Dodawanie: " + liczba1 + "" + liczba2);
    } else if(wybor === 2){
        console.log(liczba1 - liczba2);
        historia.push("Odejmowanie: "+ liczba1 + "" + liczba2);
    } else if(wybor === 3){
        console.log(liczba1 * liczba2);
        historia.push("Mnozenie: " + liczba1 + "" + liczba2);
    } else if(wybor === 4){
        console.log(liczba1 / liczba2);
        historia.push("Dzielenie: "+ liczba1 + "" + liczba2)
    } else if(wybor === 5){
    for(let i = 0; i < historia.length; i++){
        console.log(historia[i]);
        }
    } else {
        break;
    }
}
