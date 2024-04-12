const tab = [
    [1,4,6,7,8],
    [3,5,10,9,6],
    [2,1,7,6,8],
    [3,6,10,9,4],
    [8,3,9,2,1]
]






let liczbaMin = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < tab.length; i++){
    for(let j = 0; j < 5; j++){
        if (liczbaMin > tab[i][j]){
        liczbaMin = tab[i][j];
    }
}
}
console.log(liczbaMin);