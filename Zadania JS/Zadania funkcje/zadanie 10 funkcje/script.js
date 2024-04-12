function czySamogloska(litera) {
  const samogloska = ["a, e, i, o, u, y"];
  const malaLitera = litera.toLowerCase;
  return samogloska.includes(malaLitera);
}

const tekst = prompt("Podaj litere");
let sumaSamoglosek = 0;

for (let i = 0; i < tekst.length; i++) {
  if (czySamogloska(tekst[i])) {
    sumaSamoglosek++;
  }
}

console.log(
  `Suma samoglosek: ${sumaSamoglosek}, Suma spolglosek: ${
    tekst.length - sumaSamoglosek
  }`
);
