const u = undefined;

const n = null;

const b = 5 % 2;
Boolean(b);
const nan = 4 * 'b';

console.log(u, n, Boolean(b), nan)


// Должно вывести в консоль: `undefined null true NaN`
