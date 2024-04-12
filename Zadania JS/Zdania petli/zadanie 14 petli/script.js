let = magicznaLiczba = 0;
let suma = 0;
let liczbaMin = -999999;
let liczbaMax = 999999;
let srednia = 0;

while (true){
    let liczbaA = Number(prompt("Podaj liczbe"));
   
        if(liczbaA === magicznaLiczba){
            console.log(suma, srednia)
        console.log(liczbaMax + liczbaMin);
        break;
        }
        
        suma = suma + liczbaA  ;
        srednia++;

        if(liczbaA > liczbaMax){
            liczbaA = liczbaMax;
        }
        if (liczbaA < liczbaMin){
            liczbaA = liczbaMin;
        }

    }
