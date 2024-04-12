function randomNumber(min, max){
    let losowaLiczba = Math.random() * (max - min) + min;
    return losowaLiczba;
}
console.log(randomNumber(10, 50));