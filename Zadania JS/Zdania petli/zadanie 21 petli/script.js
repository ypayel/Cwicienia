"use strict";

const liczba = Number(prompt("Podaj liczbe od 150 do 1000"));
console.log(liczba);

if (liczba > 150 && liczba < 1000){
    for (let i = 0; i < liczba; i++){
        const wynik = Math.random();
        if (wynik > 0.5){
            console.log(1);
        }else {
            console.log(0);
        }
    }
       
   const kolor = prompt("Podaj kolor pigulki");

if(kolor === "czerwona"){
    for(let i = 0; i < 6; i++){
        console.log("you died");
    }
    
}   else if (kolor ===  "niebieska") {
        for(let i = 0; i < 8; i++){
        console.log("bzzz")
        }
    
    }  
}

     









