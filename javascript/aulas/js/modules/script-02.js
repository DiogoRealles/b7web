export default function script02() {
  // STRING, NUMBER, BOOLEAN, ARRAY, FUNCION, OBJECT, NULL, UNDEFINED

  let name = 'Diogo';
  let points = 1234;
  let win = true;

  const fruits = ['apple', 'banana', 'cherry'];

  const greeting = () => {
    return `Hello World Mr ${name}.`;
  };

  const car = {
    brand: 'Ford',
    wheels: 4,

    accelerate() {
      return `speedup...`;
    },
  };

  console.log(name);
  console.log(points);
  console.log(win);

  console.log(fruits);
  console.log(fruits[2]);

  console.log(greeting());

  console.log(car.brand);
  console.log(car.accelerate());
}
