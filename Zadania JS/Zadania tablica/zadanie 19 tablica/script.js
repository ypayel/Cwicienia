const tab = [
    [1,4,6,7,8],
    [3,5,10,9,6],
    [2,1,7,6,8],
    [3,6,10,9,4],
    [8,3,9,2,1]
]

let suma = 0; 

for( let i = 0; i < tab.length; i++){
    for(let j = 0; j < tab.length; j++)
    suma = suma + tab[j][i];
}
console.log(suma);