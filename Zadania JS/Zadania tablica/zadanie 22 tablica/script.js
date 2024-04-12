const tab = [0,2,3,4,5,6,2,2,3,10];
let czyIstieje = false;
const liczba = Number(prompt("Podaj summe dwoch elementow"));


 for(let i = 0; i < tab.length; i++){
    for(let j = 0; j < tab.length; j++){
        if(tab[i] + tab[j] === liczba){
            console.log("Istnieje");
            console.log(tab[i]);
            console.log(tab[j]);
            czyIstieje = true;
            break;
        }
    }

    if(czyIstieje === true){
        
        break;
    }
 } 


