function czyPalidrom (slowko){
    
    for(let i = 0; i < slowko.length; i++){
        if(slowko[i] != slowko[slowko.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(czyPalidrom(prompt("Podaj slowko")));