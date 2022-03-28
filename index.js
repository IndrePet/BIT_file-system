import { file } from './lib/file.js';

const petras = {
  name: 'Petras',
};

const createFileStatus = await file.create('users', 'petras.json', petras);
console.log(createFileStatus);
const readFileStatus1 = await file.read('users', 'petras.json');
console.log(readFileStatus1);
const updateFileStatus1 = await file.update('users', 'petras.json', {
  name: 'Petras',
  age: 99,
});
console.log(updateFileStatus1);
const readFileStatus2 = await file.read('users', 'petras.json');
console.log(readFileStatus2);
const deleteFileStatus1 = await file.delete('users', 'petras.json');
console.log(deleteFileStatus1);
const readFileStatus3 = await file.read('users', 'petras.json');
console.log(readFileStatus3);
