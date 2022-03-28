import { file } from './lib/file.js';

const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];
// 1) Studentas: Petras.
// 2) Studentas: Maryte.
// 3) Studentas: Jonas.
// 4) Studentas: Ona.

const users2 = [
  { name: 'Petras', age: 99, isMarried: true },
  { name: 'Maryte', age: 87, isMarried: false },
  { name: 'Jonas', age: 66, isMarried: false },
  { name: 'Ona', age: 54, isMarried: true },
];

for (let i = 0; i < users.length; i++) {
  console.log(`${i + 1}) Studentas: ${users[i]}.`);
}

let num = 0;

for (const user of users2) {
  console.log(
    `${++num}) Studentas: ${user.name}, age: ${user.age}, is${
      user.isMarried ? '' : ' not'
    } married (${user.name.toLowerCase()}.json)`
  );
}

for (const user of users2) {
  const fileName = `${user.name.toLowerCase()}.json`;
  const status = await file.create('users', fileName, user);
  console.log(status);
}
