let n1: number = 9;
let n2: number = 7;

// MODULE.EXPORT / REQUIRE - COMMONJS
const calc = require('./calc');
console.log(`Sum: ${calc.sum(n1, n2)}`);
console.log(`Sub: ${calc.sub(n1, n2)}`);
console.log(`Mult: ${calc.mult(n1, n2)}`);
