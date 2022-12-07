const isEqual = require('lodash/isEqual');

function printKeys(obj) {
  for (const key in obj) {
    console.log('key:', key, 'value:', obj[key]);
  }
}

function print(o) {
  const { id, name, desc, bla } = o;

  console.log(`id: ${id}, name: ${name}, desc: ${desc}, bla: ${bla}`);
}


const obj = { id: 1, name: null, desc: undefined };
const serialized = JSON.stringify(obj);
console.log(serialized);
const incoming = JSON.parse(serialized);
const objCopy = { ...obj };

console.log(isEqual(obj, incoming));
console.log(isEqual(obj, objCopy));

printKeys(obj);
printKeys(incoming);


print(obj);
print(incoming);