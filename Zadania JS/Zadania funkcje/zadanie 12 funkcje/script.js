function menu(){
    console.log("1.Mnozenie");
    console.log("2.Dzielenie");
    console.log("3.Dodawanie");
    console.log("4.Odejmowanie");
    console.log("0.Koniec")
    return Number(prompt("Wybiez opcje"));
}

while(true) {
    const wybor = menu();
    if(wybor === 0){
        break;
    }else if(wybor === 1){
        const liczba1 = Number(prompt("Podaj liczbe pierwsza"));
        const liczba2 = Number(prompt("Podaj liczbe druga"));
        console.log(liczba1 * liczba2);
    }else if (wybor === 2){
        const liczba1 = Number(prompt("Podaj liczbe pierwsza"));
        const liczba2 = Number(prompt("Podaj liczbe druga"));
        console.log(liczba1 / liczba2);
    }else if (wybor === 3){
        const liczba1 = Number(prompt("Podaj pierwsza liczbe"));
        const liczba2 = Number(prompt("Podaj liczbe druga"));
        console.log(liczba1 + liczba2);
    }else if( wybor === 4){
        const liczba1 = Number(prompt("Podaj liczbe pierwsza"));
        const liczba2 = Number(prompt("Podaj liczbe druga"));
        console.log(liczba1 - liczba2)
    }
}

