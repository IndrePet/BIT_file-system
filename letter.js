/**
 * Funkcija, kuri grazina teksto raide, pagal nurodyta pozicija.
 * @param {string} text Tekstas (ne tuscias)
 * @param {number} position Simbolio pozicija (programuotojiska). `Default: 0`;
 * @return {[boolean, string]} Funkcijos klaidos statusas; Funkcijos rezultatas (klaidos pranesimas arba simbolis)
 */
function letter(text, position = 0) {
  if (typeof text !== 'string') {
    return [true, 'Tekstas turi būti string'];
  }

  if (typeof position !== 'number') {
    return [true, 'Pozicija turi buti number'];
  }

  if (!isFinite(position)) {
    return [true, 'Pozicija turi buti tikras skaicius'];
  }

  if (position < 0) {
    return [true, 'Pozicija negali buti mazesne uz 0'];
  }
  if (!Number.isInteger(position)) {
    return [true, 'Pozicija negali buti desimtainis skaicius'];
  }

  if (position >= text.length) {
    return [
      true,
      'Pozicija negali buti didesne uz paskutinio teksto simbolio indeksa',
    ];
  }

  return [false, text[position]];
}
console.log('-----r1-----');
const r1 = letter();
console.log(r1);
console.log('-----r2-----');
const r2 = letter(245);
console.log(r2);
console.log('-----r3-----');
const r3 = letter('Abcde');
console.log(r3);
console.log('-----r4-----');
const r4 = letter('Bcde', true);
console.log(r4);
console.log('-----r5-----');
const r5 = letter('Bcde', -1);
console.log(r5);
console.log('-----r6-----');
const r6 = letter('Bcde', 0.1);
console.log(r6);
console.log('-----r7-----');
const r7 = letter('Bcde', 4);
console.log(r7);
