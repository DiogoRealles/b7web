export default function script06() {
  // ARRAY

  let fruits = ['apple', 'banana', 'cherry'];

  console.log(fruits);
  console.log(fruits[0]);
  console.log(fruits[2]);

  // FILTER
  let newFruits = fruits.filter((fruit, index) => fruit.length <= 5);

  console.log(newFruits);
}
