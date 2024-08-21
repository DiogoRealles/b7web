// TYPING PARAM FUNCTION
const username: string = 'Diogo';
function greeting(username: string) {
  return `Welcome ${username}`;
}

// console.log(greeting(username));

// TYPING RETURN FUNCTION
const x = 3,
  y = 8;
function sum(x: number, y: number): number {
  return x + y;
}

// console.log(sum(x, y));

// CONTEXTUAL TYPE
let names = ['Amanda', 'Barbara', 'Camila', 90];

names.forEach((name) => {
  if (typeof name === 'string') {
    return name.toUpperCase();
  } else {
    return name;
  }
});

// TYPE FUNCTIONS
type MathFunction = (n1: number, n2: number) => number;

const sub: MathFunction = (n1, n2) => {
  return n1 + n2;
};

console.log(sub(x, y));
