function zwiekszenie(tab) {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = tab[i] + 10;
  }
  return tab;
}
const wynik = zwiekszenie([1, 2, 3, 4, 5, 6, 7]);
console.log(wynik);
