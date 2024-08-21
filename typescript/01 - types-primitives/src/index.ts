// Tipos explícitos

// String
const username: string = 'Diogo';

// Number
const age: number = 35;

// Boolean
const sleeping: boolean = false;

// Array
const fruits: string[] = ['apple', 'banana', 'cherry'];

// Tuple
const items: [string, number, boolean] = ['Diogo', 34, true];

// Tipos por inferência

// String
const username2 = 'Diogo';

// Number
const age2 = 35;

// Boolean
const sleeping2 = false;

// Array
const fruits2 = ['apple', 'banana', 'cherry'];

// Tuple
const items2 = ['Diogo', 35, false];

// FUNCTION - TYPE PARAMS
function firstLetterUpperCase(name: string) {
  let firstLetter = name.charAt(0).toUpperCase();

  return firstLetter + name.substring(1);
}

firstLetterUpperCase('diogo');

// FUNCTION - TYPE RETURN
function sum(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(sum(3, 5));

// FUNCTION - CONTEXTUAL TYPE ANONYMOUS
const names = ['asuna', 'diogo', 'suguha', 50];

names.forEach((name) => {
  if (typeof name == 'string') {
    console.log(name.toUpperCase());
  } else {
    console.log(name);
  }
});

// OBJECT
type TCarProps = {
  brand: string;
  whells: number;
  accelerate: () => string;
};

const tCar: TCarProps = {
  brand: 'Ford',
  whells: 4,
  accelerate() {
    return `${this.brand} accelerating...`;
  },
};

console.log(tCar.brand);
console.log(tCar.whells);
console.log(tCar.accelerate());

// UNION TYPE
const nickName: string | number = '';
console.log(nickName);

// // TYPE GUARD
function showNickName(nickName: string | number) {
  if (typeof nickName === 'string') {
    console.log(nickName.toUpperCase());
  } else {
    console.log(nickName);
  }
}

showNickName(241);
showNickName('zai');

// INTERFACE
interface ICarProps {
  brand: string;
  whells: number;
}

const iCar: ICarProps = {
  brand: 'Ford',
  whells: 4,
  accelerate() {
    return `${this.brand} accelerating...`;
  },
};

interface ICarProps {
  accelerate: () => string;
}

console.log(iCar.brand);
console.log(iCar.whells);
console.log(iCar.accelerate());

// TYPE LITERALS
type TOptionsProps = {
  width: number;
  height: number;
};

function config(props: TOptionsProps | 'auto') {}

config({ width: 150, height: 250 });
config('auto');

// INFERENCE LITERAL
function fetchPosts(baseURL: string, method: 'GET' | 'POST') {}

type TMethodProps = {
  baseURL: string;
  method: 'GET' | 'POST';
};

// SIMULANDO BUSCAR DADOS
const req: TMethodProps = {
  baseURL: 'https://dominio.com/api/endpoint',
  method: 'GET',
};

// SIMULANDO POSTANOO DADOS
req.method = 'POST';

fetchPosts(req.baseURL, req.method);

// FUNCTION TYPE
type MathFunction = (n1: number, n2: number) => number;

const sum2: MathFunction = (n1, n2) => {
  return n1 + n2;
};

const sub: MathFunction = (n1, n2) => {
  return n1 - n2;
};
console.log(sum2(3, 9));
console.log(sub(3, 9));
