function maksymalna (tab){
    let maks = Number.MIN_SAFE_INTEGER;

    for( let i = 0; i < tab.length; i++){
        if(maks < tab[i]){
            maks = tab[i];
        }
    }
    return maks;
}


function minimalna (tab) {
    let mini = Number.MAX_SAFE_INTEGER;

    for ( let i = 0; i < tab.length; i++){
        if(mini > tab[i]){
            mini = tab[i];
        }
    }
    return mini;
}

function srednia (tab){
    let suma = 0;

    for( let i = 0; i < tab.length; i++){
        suma = suma + tab[i];
    }
    return suma / tab.length;
}

const tablica = [1,2,56,7,4,0];

console.log(maksymalna(tablica));
console.log(minimalna(tablica));
console.log(srednia(tablica));

