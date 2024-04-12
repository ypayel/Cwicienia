function pierwsza(liczba1) {
  let pierwsza = true;
  if (liczba1 < 1) {
    return false;
  }
  for (let i = 2; i < liczba1; i++) {
    if (liczba1 % i === 0) {
      pierwsza = false;
      break;
    }
  }
  return pierwsza;
}
const wynik = pierwsza(87);
console.log(wynik);
