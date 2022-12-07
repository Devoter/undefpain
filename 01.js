const condition = false;

/**
 * @param {number} op1
 * @param {number} op2
 * @returns {number}
 */
function sum(op1, op2) {
  return op1 + op2;
}

/**
 * @type {number}
 */
let a; // undefined

// ...

if (condition) { // это условие не выполнилось
  a = 10;
}

/**
 * @type {number}
 */
let b = 10;

const result = sum(a, b);

a = 1; // поздно

console.log('sum =', result); // sum = NaN
