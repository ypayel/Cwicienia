const tab = [];
const CzyDzielisie = false;


for(let i = 0; i < 10; i++){
const liczba = Number(prompt("Podaj liczbe"))

if(liczba % 5 === 0){
    tab.push(liczba);
    console.log(tab.sort((a,b)=>(a > b ? -1 : 1)));
    }
}
    if (tab.length === 0){
    console.log("Szkoda");
    
}    