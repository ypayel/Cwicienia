let liczbaA = Number(prompt("Podaj pierwszam liczbe"));
let liczbaB = Number(prompt("Podaj druga liczbe"));
let suma = 0;

if (liczbaA > liczbaB){
    console.log("Robota Skonczona");
}
else {
for(let i = liczbaA; i <= liczbaB; i++)

    suma = suma + i;
}
       
console.log(suma);