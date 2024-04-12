
// Napisz kod, który po naciśnięciu przycisku z podpisem Pokaż.
//  Przepisze wartość z pola tekstowego type="number" do div id="wynik".
//   Liczbę wypisz jako nagłówek 1 stopnia.
//    Sprawdź w konsoli typ odczytanej wartości.
//zadanie 1


// const result = document.getElementById(`result`);
// const button = document.getElementById(`button`);
// const number = document.getElementById(`number`);


// button.addEventListener(`click`, () => {
//     result.innerHTML=`<h1>` + number.value + `</h1>`;
//     console.log(typeof number.value);
// });





// Jak wyżej.
//  Zmodyfikuj kod tak by wypisywała się 2 potęga wpisanej liczby.

// zadanie 2 


const result = document.getElementById(`result`);
const button = document.getElementById(`button`);
const number = document.getElementById(`number`);


button.addEventListener(`click`, () => {
    console.log(typeof number.value);


    result.innerHTML=`<h1>` + Number(number.value)* Number(number.value) + `</h1>`;
    console.log(typeof Number(number.value));
});