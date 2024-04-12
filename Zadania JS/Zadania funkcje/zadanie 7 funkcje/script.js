function sprawdzenie(liczba1) {
  return liczba1 % 2 === 0;
}

function wyswietlParzyste(tab) {
  for (let i = 0; i < tab.length; i++) {
    if (sprawdzenie(tab[i])) {
      console.log(tab[i]);
    }
  }
}

const wynik = wyswietlParzyste([1, 2, 4, 6, 7, 2, 4]);
