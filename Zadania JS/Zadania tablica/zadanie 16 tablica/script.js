const litery = [];
const ileLiter = [];
const slowko = prompt("Podaj slowko");

for(let i = 0; i < slowko.length; i++){
    let indeksLitery = litery.indexOf(slowko[i]);
    if(indeksLitery === -1){
        litery.push(slowko[i]);
        ileLiter.push(1);
    } else {
        ileLiter[indeksLitery]++;
    }
}
 console.log(slowko);
 console.log(ileLiter);